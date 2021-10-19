import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [show, setShow] = useState(true);

  const onSubmitNewExpenseHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
    };
    console.log(newExpenseData);
    props.onSubmitFromAppProps(newExpenseData);
  };

  const onCancelBtnClickHandler = () => {
    setShow(true);
  };

  return (
    <div className="new-expense">
      {show ? (
        <button type="submit" onClick={() => setShow(false)}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onCancelBtnClick={onCancelBtnClickHandler}
          onSubmitNewExpense={onSubmitNewExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
