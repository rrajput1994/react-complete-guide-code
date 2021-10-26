import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo";
import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP Componet Call..");

  const toggleParaHandler = useCallback(() => {
    if (allowToggle) {
      setShowPara((showPara) => !showPara);
    }
  }, [allowToggle]);

  const allowToggleParaHandler = useCallback(() => {
    setAllowToggle(true);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showPara} />
      <Button onClick={allowToggleParaHandler}>Allow Toggle</Button>
      <Button onClick={toggleParaHandler}>Toggle Para</Button>
    </div>
  );
}

export default App;
