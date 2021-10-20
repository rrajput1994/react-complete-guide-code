import React from "react";
import Card from "../UI/Card/Card";
import "./UserList.css";
import UserListItems from "./UserListItems";
const UserList = (props) => {
  const onDeleteListHandler = (userid) => {
    props.onDeleteClicked(userid);
  };

  let userListContent = <h4 className="No-records">No User Found!</h4>;

  if (props.users.length > 0) {
    userListContent = (
      <ul className="user-list">
        {props.users.map((user) => {
          return (
            <UserListItems
              key={user.id}
              userid={user.id}
              username={user.username}
              userage={user.userage}
              onDeleteHandler={onDeleteListHandler}
            />
          );
        })}
      </ul>
    );
  }

  return <Card>{userListContent}</Card>;
};

export default UserList;
