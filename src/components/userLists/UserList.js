import React from "react";
import Card from "../UI/Card/Card";
import "./UserList.css";
import UserListItems from "./UserListItems";
const UserList = (props) => {
  let userListContent = <h4 className="No-records">No User Found!</h4>;

  if (props.users.length > 0) {
    userListContent = (
      <ul className="user-list">
        {props.users.map((user) => {
          return (
            <UserListItems
              key={user.userId}
              username={user.userName}
              userage={user.userAge}
            />
          );
        })}
      </ul>
    );
  }

  return <Card>{userListContent}</Card>;
};

export default UserList;
