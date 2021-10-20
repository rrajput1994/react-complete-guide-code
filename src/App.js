import React from "react";
import UserForm from "./components/userInputs/UserForm";
import UserList from "./components/userLists/UserList";
import "./App.css";
import { useState } from "react/cjs/react.development";

// const Dummy_users = [
//   {
//     userId: 1,
//     userName: "Rishi",
//     userAge: 30,
//   },
//   {
//     userId: 2,
//     userName: "Sachin",
//     userAge: 35,
//   },
//   {
//     userId: 3,
//     userName: "Gourav",
//     userAge: 25,
//   },
// ];

function App() {
  // const [users, setUsers] = useState(Dummy_users);

  const [users, setUsers] = useState([]);

  const onFormSubmitInputHandler = (inputValues) => {
    console.log(inputValues);
    setUsers((prevValues) => {
      return [inputValues, ...prevValues];
    });
  };

  return (
    <div className="main-wrapper">
      <UserForm onFormSubmit={onFormSubmitInputHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
