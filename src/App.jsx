import Button from "./components/Button";
import { useState } from "react";
import Screen from "./components/Screen";
import ButtonOp from "./components/ButtonOp";
import { numberButtons } from "./utils/constants";
import { operatorButtons } from "./utils/constants";
import { topOpBtns } from "./utils/constants";
import "./styles/global.css";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("");
  const [prevScreen, setPrevScreen] = useState("");
  const [todoOp, setTodoOp] = useState("");
  function changeTodoOp(val) {
    setTodoOp(val);
    setPrevScreen(currentScreen);
    setCurrentScreen("");
  }
  function equalHandler() { 
    let result;
    switch (todoOp) {
      case "+":
        result = Number(prevScreen) + Number(currentScreen) + "";
        break;
      case "-":
        result = Number(prevScreen) - Number(currentScreen) + "";
        break;
      case "×":
        result = Number(prevScreen) * Number(currentScreen) + "";
        break;
      case "÷":
        result = Number(prevScreen) / Number(currentScreen) + "";
        break;
    }
    setCurrentScreen(result);
    // if (todoOp == "+") {
    //   const result = Number(prevScreen) + Number(currentScreen) + "";
    //   setCurrentScreen(result);
    // }
    // if (todoOp == "-") {
    //   const result = Number(prevScreen) - Number(currentScreen) + "";
    //   setCurrentScreen(result);
    // }
    // if (todoOp == "×") {
    //   const result = Number(prevScreen) * Number(currentScreen) + "";
    //   setCurrentScreen(result);
    // }
    // if (todoOp == "÷") {
    //   const result = Number(prevScreen) / Number(currentScreen) + "";
    //   setCurrentScreen(result);
    // }
    // if (todoOp == "AC") {
    //   setCurrentScreen("");
    //   setPrevScreen("");
    //   setTodoOp("");
    // }
    // if (todoOp == "%") {
    //   const result = Number(prevScreen) / 100 + "";
    //   setCurrentScreen(result);
    // }
    // if (todoOp == "+/-") {
    //   const result = -1 * prevScreen;
    //   setCurrentScreen(result);
    // }
    // if (todoOp == ".") {
    //   const result = prevScreen + ".";
    //   setCurrentScreen(result);
    // }
  }
  function changeScreenVal(val) {
    setCurrentScreen(currentScreen + val);
  }
  return (
    <div className="mainCalc">
      <Screen value={currentScreen} />
      <div className="buttons">
        <div className="numbers">
          <div className="topbtns">
            {topOpBtns.map((val, index) => {
              return (
                <ButtonOp value={val} key={index} changeTodoOp={changeTodoOp} />
              );
            })}
          </div>
          {numberButtons.map((val, index) => {
            return (
              <Button
                value={val}
                key={index}
                changeScreenVal={changeScreenVal}
              />
            );
          })}
          <ButtonOp value={"."} changeTodoOp={changeTodoOp} />
        </div>
        <div className="operators">
          {operatorButtons.map((val, index) => {
            return (
              <ButtonOp value={val} key={index} changeTodoOp={changeTodoOp} />
            );
          })}
          <button className="calcBtn" onClick={equalHandler}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

/* {count}
        <button onClick={() => setCount(count + 1)}>+</button>
         */
//use switch case
