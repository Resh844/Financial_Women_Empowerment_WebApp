import React, { useState } from "react";
import "./QuizPage.css";

const quizQuestions = [
  {
    question: "What is financial literacy?",
    options: [
      "Understanding money management",
      "Playing games with money",
      "Watching TV",
      "Ignoring financial decisions",
    ],
    correct: 0,
  },
  {
    question: "What is the best way to save money?",
    options: [
      "Keeping money in a bank account",
      "Spending more than you earn",
      "Buying unnecessary items",
      "Borrowing money frequently",
    ],
    correct: 0,
  },
  {
    question: "What is an example of a good investment?",
    options: [
      "Investing in a small business",
      "Buying lottery tickets",
      "Spending all money on luxury items",
      "Keeping money under a mattress",
    ],
    correct: 0,
  },
];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    quizQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
  };

  return (
    <div className="quiz-container">
      <h2>📘 Financial Literacy Quiz</h2>

      {!showResults ? (
        <>
          <div className="quiz-question-container">
            <p className="quiz-question">
              {currentQuestion + 1}. {quizQuestions[currentQuestion].question}
            </p>

            <ul className="options">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <li key={index} className="option">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="answer"
                    checked={selectedAnswers[currentQuestion] === index}
                    onChange={() => handleAnswerChange(index)}
                  />
                  <label htmlFor={`option-${index}`}>{option}</label>
                </li>
              ))}
            </ul>
          </div>

          <div className="quiz-navigation">
            <button onClick={handlePrevious} disabled={currentQuestion === 0}>
              ◀ Previous
            </button>
            {currentQuestion === quizQuestions.length - 1 ? (
              <button onClick={handleSubmit}>Submit</button>
            ) : (
              <button onClick={handleNext}>Next ▶</button>
            )}
          </div>
        </>
      ) : (
        <div className="results">
          <h3>🎉 Your Score: {score} / {quizQuestions.length}</h3>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
