import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  // console.log(filteredYear)

  const filterYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // console.log(filteredExpenses)

  
  
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selecter={filteredYear} onFilter={filterYear} />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpenseList items={filteredExpenses}/>
      </Card>
    </li>
  );
};

export default Expenses;
