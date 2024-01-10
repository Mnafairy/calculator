import Button from "./components/Button";
import { useState } from "react";
import Screen from "./components/Screen";
import "./styles/global.css";

export default function App() {
  const [screenVal, setScreenVal] = useState(0);
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
  // function changeScreenVal(val) {
  //   setScreenVal(screenVal + val);
  // }
  return (
    <div className="mainCalc">
      <Screen value={screenVal} />
      <div className="buttons">
        {buttonValues.map((e, index) => {
          console.log("e:", e);
          return (
            <Button value={e} key={index} onClick={setScreenVal(screenVal)} />
          );
        })}
        {/* <Button value="1" onClick={setScreenVal} /> */}
        {/* {count}
        <button onClick={() => setCount(count + 1)}>+</button>
         */}
      </div>
    </div>
  );
}
