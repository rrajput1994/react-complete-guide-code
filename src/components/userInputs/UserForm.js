import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./UserForm.module.css";
const UserForm = (props) => {
  const [users, setUsers] = useState({
    username: "",
    userage: "",
  });

  const [isValidInput, setIsInvalidInput] = useState(true);

  const onInputChangeHandler = (e) => {
    const { name, value } = e.target;

    if (value.length > 0) {
      setIsInvalidInput(true);
    }
    setUsers((prevUsers) => {
      return { ...prevUsers, [name]: value };
    });
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(
    //   "UserName :" + users.username + "And" + "Age :" + users.userage
    // );

    if (users.username === "" || users.userage === "") {
      setIsInvalidInput(false);
      return;
    }

    const newEnteredValue = {
      userId: Date.now(),
      userName: users.username,
      userAge: users.userage,
    };

    props.onFormSubmit(newEnteredValue);

    setUsers({ username: "", userage: "" });
  };

  return (
    <Card>
      <form onSubmit={onFormSubmitHandler}>
        <div
          className={`${styles["form-controls"]} ${
            !isValidInput && styles.invalid
          }`}
        >
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              value={users.username}
              onChange={onInputChangeHandler}
              autoComplete="off"
            />
          </div>
          <div>
            <label>User Age</label>
            <input
              type="number"
              name="userage"
              value={users.userage}
              onChange={onInputChangeHandler}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="form-actions">
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
