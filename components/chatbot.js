import React, { useState, useEffect, useRef } from "react";
import "./chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatBoxRef = useRef(null);

  const botName = "FinBot";

  // Toggle Chat Visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Append messages dynamically
  const appendMessage = (sender, text) => {
    const newMessage = { sender, text, timestamp: new Date().toLocaleTimeString() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Auto-scroll to the latest message
    setTimeout(() => {
      if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }
    }, 100);
  };

  // Send user message
  const sendMessage = () => {
    if (userInput.trim() === "") return;

    appendMessage("user", userInput);
    fetch("http://localhost:5005/webhooks/rest/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sender: "user", message: userInput }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          data.forEach((reply) => {
            if (reply.text) appendMessage("bot", reply.text);
          });
        } else {
          appendMessage("bot", "I'm not sure how to respond to that. Could you rephrase?");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        appendMessage("bot", "Error connecting to the server. Please try again later.");
      });

    setUserInput(""); // Clear input after sending
  };

  // Voice recognition
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "kn-IN";
  recognition.interimResults = false;

  const startSpeechRecognition = () => {
    recognition.start();
  };

  recognition.onresult = (event) => {
    const speechText = event.results[0][0].transcript;
    setUserInput(speechText);
    sendMessage();
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div id="chat-widget" onClick={toggleChat}>
        💬
      </div>

      {/* Chat Container */}
      {isChatOpen && (
        <div id="chat-container">
          <div id="chat-header">{botName}</div>
          <div id="chat-box" ref={chatBoxRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <p dangerouslySetInnerHTML={{ __html: msg.text }}></p>
                <span className="timestamp">{msg.timestamp}</span>
              </div>
            ))}
          </div>
          <div id="input-area">
            <input
              type="text"
              id="user-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
            />
            <button id="send-btn" onClick={sendMessage}>
              Send
            </button>
            <button id="mic-btn" onClick={startSpeechRecognition}>
              🎤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
