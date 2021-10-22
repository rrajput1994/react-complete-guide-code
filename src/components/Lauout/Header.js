import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealBanner from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealBanner} alt="meal-banner" />
      </div>
    </Fragment>
  );
};

export default Header;
