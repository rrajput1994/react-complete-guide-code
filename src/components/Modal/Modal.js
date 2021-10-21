import React from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button/Button";
import classes from "./Modal.module.css";

const ModalOverly = (props) => {
  const onClickCloseHandler = () => {
    props.onModleClose(false);
  };
  return (
    <div className={classes.modal}>
      <div className={classes["modal-content"]}>
        <div className={classes["modal-header"]}>
          <h4>{props.title}</h4>
        </div>
        <div className={classes["modal-body"]}>{props.message}</div>
        <div className={classes["modal-footer"]}>
          <Button type="button" onClick={onClickCloseHandler}>
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalOverly
      onModleClose={props.onModalClose}
      title={props.title}
      message={props.messageBody}
    />,
    document.getElementById("Modal-overly")
  );
};

export default Modal;
