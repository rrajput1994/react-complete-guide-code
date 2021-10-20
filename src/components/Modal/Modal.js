import React from "react";
import Button from "../UI/Button/Button";
import "./Modal.css";
const Modal = (props) => {
  const onModalCloseHandler = () => {
    props.onModalClose(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Invalid Input</h4>
        </div>
        <div className="modal-body">{props.messageBody}</div>
        <div className="modal-footer">
          <Button type="button" onClick={onModalCloseHandler}>
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
