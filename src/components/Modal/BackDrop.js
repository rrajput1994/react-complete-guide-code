import React from "react";
import "./BackDrop.css";
const BackDrop = (props) => {
  const onModalCloseHandler = () => {
    props.onModalCloseBackDrop(false);
  };

  return <div className="back-drop" onClick={onModalCloseHandler}></div>;
};

export default BackDrop;
