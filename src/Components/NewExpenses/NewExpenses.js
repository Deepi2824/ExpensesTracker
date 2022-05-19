import React, { useState } from "react";

import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";

const NewExpenses = ({ onAddExpenses }) => {
  const [showForm, setShowForm] = useState(false);
  const saveData = (enteredData) => {
    const expenseData = {
      ...enteredData,

      id: Math.random().toString(),
    };
    // console.log(expenseData)

    onAddExpenses(expenseData);
  };
  const formShowing = () => {
    setShowForm(true);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpensesForm saveExpenseData={saveData} setShowForm={setShowForm} />
      ) : (
        <button onClick={formShowing}>Add Expenses</button>
      )}
    </div>
  );
};

export default NewExpenses;
