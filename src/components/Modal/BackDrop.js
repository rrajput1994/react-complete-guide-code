import React from "react";
import ReactDOM from "react-dom";
import classes from "./BackDrop.module.css";

const BackDropOverly = (props) => {
  const onModalCloseHandler = () => {
    props.onModalCloseBackDrop(false);
  };

  return (
    <div className={classes["back-drop"]} onClick={onModalCloseHandler}></div>
  );
};

const BackDrop = (props) => {
  return ReactDOM.createPortal(
    <BackDropOverly onModalCloseBackDrop={props.onModalCloseBackDrop} />,
    document.getElementById("Backdrop-overly")
  );
};

export default BackDrop;
