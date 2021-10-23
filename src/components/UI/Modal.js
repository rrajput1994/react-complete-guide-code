import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onBackdDropClick}></div>
  );
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onBackdDropClick={props.onModalClose} />,
        document.getElementById("modal-overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,
        document.getElementById("modal-overlays")
      )}
    </Fragment>
  );
};

export default Modal;
