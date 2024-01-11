import React from "react";
import "../styles/button.css";

export default function Button({ value, changeScreenVal }) {
  // console.log("value:", value);
  return (
    <div className="calcBtn" onClick={() => changeScreenVal(value)}>
      {value}
    </div>
  );
}