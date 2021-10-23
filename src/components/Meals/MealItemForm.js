import React from "react";
import Input from "../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const mealItemId = props.mealitemId;
  return (
    <form className={classes.form}>
      <Input
        label="amount"
        input={{
          type: "number",
          id: `amount_${mealItemId}`,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button} id={mealItemId}>
        Add
      </button>
    </form>
  );
};

export default MealItemForm;
