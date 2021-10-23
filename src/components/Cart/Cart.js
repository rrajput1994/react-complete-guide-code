import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  console.log(props.mealItems);
  return (
    <Modal onModalClose={props.onModalClose}>
      <ul className={classes["cart-items"]}>
        <li>Cart Items</li>
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onModalClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
