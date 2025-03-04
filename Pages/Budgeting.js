import React, { useState } from "react";
import "./Budgeting.css";

const Budgeting = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState([{ category: "", amount: "" }]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [savings, setSavings] = useState(0);

  // Handle income input change
  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  // Handle expense change
  const handleExpenseChange = (index, field, value) => {
    const newExpenses = [...expenses];
    newExpenses[index][field] = value;
    setExpenses(newExpenses);
  };

  // Add a new expense field
  const addExpense = () => {
    setExpenses([...expenses, { category: "", amount: "" }]);
  };

  // Calculate budget summary
  const calculateBudget = () => {
    const total = expenses.reduce((sum, exp) => sum + (parseFloat(exp.amount) || 0), 0);
    setTotalExpenses(total);
    setSavings(parseFloat(income || 0) - total);
  };

  return (
    <div className="budgeting-container">
      <h2>📊 Budgeting Tool</h2>
      <p>Track your income and expenses to manage your finances better.</p>

      {/* Income Input */}
      <label>💰 Monthly Income (₹)</label>
      <input type="number" value={income} onChange={handleIncomeChange} placeholder="Enter your monthly income" />

      {/* Expenses Section */}
      <h3>📝 Expenses</h3>
      {expenses.map((expense, index) => (
        <div key={index} className="expense-row">
          <input
            type="text"
            placeholder="Category (e.g., Rent, Food)"
            value={expense.category}
            onChange={(e) => handleExpenseChange(index, "category", e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount (₹)"
            value={expense.amount}
            onChange={(e) => handleExpenseChange(index, "amount", e.target.value)}
          />
        </div>
      ))}
      
      {/* Buttons */}
      <button onClick={addExpense} className="add-expense-btn">➕ Add Expense</button>
      <button onClick={calculateBudget} className="calculate-btn">📊 Calculate</button>

      {/* Results */}
      {totalExpenses > 0 && (
        <div className="budget-summary">
          <p>💸 Total Expenses: ₹{totalExpenses}</p>
          <p>💰 Savings: ₹{savings >= 0 ? savings : "Overspending!"}</p>
        </div>
      )}
    </div>
  );
};

export default Budgeting;
