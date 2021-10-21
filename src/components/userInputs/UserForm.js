import React, { useState, useRef } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./UserForm.module.css";
const UserForm = (props) => {
  // const [users, setUsers] = useState({
  //   username: "",
  //   userage: "",
  // });

  const userNameIputRef = useRef();
  const userAgeIputRef = useRef();

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const [isValidInput, setIsInvalidInput] = useState(true);

  // const onInputNameChangeHandler = (e) => {
  //   setUserName(e.target.value);
  //   if (e.target.value.length > 0) {
  //     setIsInvalidInput(true);
  //   }
  // };
  // const onInputAgeChangeHandler = (e) => {
  //   setUserAge(e.target.value);
  //   if (e.target.value.length > 0) {
  //     setIsInvalidInput(true);
  //   }
  // };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();

    const enterUserName = userNameIputRef.current.value;
    const enterUserAge = userAgeIputRef.current.value;

    if (enterUserName === "" || enterUserAge === "") {
      setIsInvalidInput(false);
      props.onShowModalClick(true);
      let title = "Invalid Input";
      let message = "Name and Age Should not be empty!";
      props.onErrorHandler(title, message);
      return;
    }

    if (+enterUserAge < 1) {
      let title = "Invalid Age";
      let message = "Age Should not less than 1 year!";
      props.onErrorHandler(title, message);
      return;
    }

    props.onFormSubmit(enterUserName, enterUserAge);

    userNameIputRef.current.value = "";
    userAgeIputRef.current.value = "";

    // setUserName("");
    // setUserAge("");
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
              // value={userName}
              // onChange={onInputNameChangeHandler}
              autoComplete="off"
              ref={userNameIputRef}
            />
          </div>
          <div>
            <label>User Age</label>
            <input
              type="number"
              name="userage"
              // value={userAge}
              // onChange={onInputAgeChangeHandler}
              autoComplete="off"
              ref={userAgeIputRef}
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
