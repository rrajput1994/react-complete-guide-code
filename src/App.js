import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      {showModal && <Cart onModalClose={hideModalHandler} />}

      <Header onCartBtnClick={showModalHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
