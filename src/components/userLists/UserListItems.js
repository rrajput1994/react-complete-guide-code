import React from "react";
import { FaTrash } from "react-icons/fa";
const UserListItems = (props) => {
  const onDeleteClickHandler = () => {
    props.onDeleteHandler(props.userid);
  };

  return (
    <li>
      <h5>
        {props.username} ({props.userage} Years Old) {props.userid}
      </h5>
      <span onClick={onDeleteClickHandler}>{<FaTrash />}</span>
    </li>
  );
};

export default UserListItems;
