import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./UserForm.module.css";
const UserForm = (props) => {
  // const [users, setUsers] = useState({
  //   username: "",
  //   userage: "",
  // });

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const [isValidInput, setIsInvalidInput] = useState(true);

  const onInputNameChangeHandler = (e) => {
    setUserName(e.target.value);
    if (e.target.value.length > 0) {
      setIsInvalidInput(true);
    }
  };
  const onInputAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
    if (e.target.value.length > 0) {
      setIsInvalidInput(true);
    }
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();

    if (userName === "" || userAge === "") {
      setIsInvalidInput(false);
      props.onShowModalClick(true);
      props.onErrorHandler("Name and Age Should not be empty!");
      return;
    }

    if (+userAge < 1) {
      props.onErrorHandler("Age Should not less than 1 year!");
      return;
    }

    props.onFormSubmit(userName, userAge);

    setUserName("");
    setUserAge("");
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
              value={userName}
              onChange={onInputNameChangeHandler}
              autoComplete="off"
            />
          </div>
          <div>
            <label>User Age</label>
            <input
              type="number"
              name="userage"
              value={userAge}
              onChange={onInputAgeChangeHandler}
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
