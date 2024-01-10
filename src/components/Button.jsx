import React from "react";
import "../styles/button.css";

export default function Button({ value, onClick }) {
  // console.log("value:", value);
  return (
    <div className="calcBtn" onClick={() => onClick(value)}>
      {value}
    </div>
  );
}