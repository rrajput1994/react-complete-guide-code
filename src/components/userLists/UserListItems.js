import React from "react";

const UserListItems = (props) => {
  return (
    <li>
      {props.username} ({props.userage} Years Old)
    </li>
  );
};

export default UserListItems;
