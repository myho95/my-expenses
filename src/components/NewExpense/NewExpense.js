import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseDataHandler = (expense) => {
    const savedExpense = { ...expense };
    console.log(savedExpense);
    props.onAddExpense(savedExpense);
  };
  return (
    <Card className="new-expense">
      <ExpenseForm onSavedExpenseData={expenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
