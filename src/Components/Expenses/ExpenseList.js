import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList=(props)=>{
    

  if (props.items.length <= 0) {
      return<h1 className="expenses-list__fallback">expense not found</h1>
  }
      
    return(
        <ul className="expenses-list">
        
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      </ul>
      
    )
};

export default ExpenseList;