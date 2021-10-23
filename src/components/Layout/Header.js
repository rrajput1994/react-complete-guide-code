import React, { Fragment, useState } from "react";
import classes from "./Header.module.css";
import mealBanner from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton onClickBtn={props.onCartBtnClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealBanner} alt="meal-banner" />
      </div>
    </Fragment>
  );
};

export default Header;