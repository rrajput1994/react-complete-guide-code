import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);

  console.log("APP Componet Call..");

  const toggleParaHandler = () => {
    setShowPara(!showPara);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showPara && <p>This is a Paragraph!</p>}
      <Button onClick={toggleParaHandler}>Toggle Para</Button>
    </div>
  );
}

export default App;
