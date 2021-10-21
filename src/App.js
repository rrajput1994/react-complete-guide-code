import React from "react";
import UserForm from "./components/userInputs/UserForm";
import UserList from "./components/userLists/UserList";
import "./App.css";
import { useState } from "react/cjs/react.development";
import Modal from "./components/Modal/Modal";
import BackDrop from "./components/Modal/BackDrop";

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

  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const [users, setUsers] = useState([]);

  const onFormSubmitInputHandler = (uName, uAge) => {
    setUsers((prevValues) => {
      return [
        ...prevValues,
        { username: uName, userage: uAge, id: Math.random().toString() },
      ];
    });
  };

  const onDeleteClickAppHandler = (userid) => {
    const filteredValues = users.filter((user) => user.id !== userid);
    setUsers(() => {
      return filteredValues;
    });
  };

  const onShowModalClickHandler = (mValue) => {
    setShowModal(mValue);
  };

  const onErrormessageHandler = (eTitle, eMessage) => {
    setErrorMessage(() => {
      return { title: eTitle, message: eMessage };
    });
  };

  const onModalcloseHandler = (closeValueModal) => {
    setShowModal(closeValueModal);
  };

  const onModalCloseBackDrop = (closeValueBackDrop) => {
    setShowModal(closeValueBackDrop);
  };

  return (
    <div className="main-wrapper">
      <UserForm
        onFormSubmit={onFormSubmitInputHandler}
        onShowModalClick={onShowModalClickHandler}
        onErrorHandler={onErrormessageHandler}
      />
      <UserList users={users} onDeleteClicked={onDeleteClickAppHandler} />

      {showModal && (
        <Modal
          title={errorMessage.title}
          messageBody={errorMessage.message}
          onModalClose={onModalcloseHandler}
        />
      )}
      {showModal && <BackDrop onModalCloseBackDrop={onModalCloseBackDrop} />}
    </div>
  );
}

export default App;
