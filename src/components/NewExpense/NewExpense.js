import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const onSubmitNewExpenseHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
    };
    console.log(newExpenseData);
    props.onSubmitFromAppProps(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitNewExpense={onSubmitNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
