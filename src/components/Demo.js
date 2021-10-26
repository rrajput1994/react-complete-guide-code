import React from "react";

const Demo = (props) => {
  console.log("Demo Running");

  return <p>{props.show ? "This is para" : ""}</p>;
};

export default React.memo(Demo);
