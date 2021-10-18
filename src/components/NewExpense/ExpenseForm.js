import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [values, setValues] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newValues = {
      id: Date.now(),
      title: values.title,
      amount: values.amount,
      date: values.date,
    };
    console.log(newValues);
    props.onSubmitNewExpense(newValues);
    setValues({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={values.amount}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={values.date}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
