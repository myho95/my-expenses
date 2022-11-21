import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseDataHandler = (expense) => {
    const savedExpense = { ...expense };
    props.onAddExpense(savedExpense);
    hideFormHandler();
  };
  const [IsShowExpenseForm, setIsShowExpenseForm] = useState(false);

  const hideFormHandler = () => {
    setIsShowExpenseForm(false);
  };
  const showFormHandler = () => {
    setIsShowExpenseForm(true);
  };
  return (
    <Card className="new-expense">
      {!IsShowExpenseForm ? (
        <button onClick={showFormHandler}>Add new expense</button>
      ) : (
        <ExpenseForm
          onSavedExpenseData={expenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
