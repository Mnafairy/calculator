import React from "react";
import { useState } from "react";

import "../styles/button.css";

export default function Button(props) {
  const [count, setCount] = useState(0);
  console.log("props:", props);
  const value = props.value;
  return (
    <div className="calcBtn" onClick={() => setCount(count + 1)}>
      {/* {count} */}
      {value}
    </div>
  );
}
