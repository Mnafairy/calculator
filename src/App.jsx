import Button from "./components/Button";
import { useState } from "react";
import "./styles/global.css";

export default function App() {
  const [count, setCount] = useState(0);
  let buttonValues = [
    "AC",
    "+/-",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="buttons">
      {buttonValues.map((e, index) => {
        console.log("e:", e);
        return <Button value={e} key={index} />;
      })}
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count * 5)}>*</button>
      <button onClick={() => setCount(count / 2)}>/</button>
    </div>
  );
}
