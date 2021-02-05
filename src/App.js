import React, { useState } from "react";
import * as OPERATION from "./operations";

function App() {
  const [number, setNumber] = useState(0);
  const [operation, setOperation] = useState("");
  const [resetInput, setResetInput] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNumberPress = (nextNumber) => {
    if (resetInput || showAnswer) {
      setNumber(nextNumber);
      console.log("nextNumber", nextNumber);
      setResetInput(false);
      setShowAnswer(false);
    } else {
      setNumber((prev) => parseFloat("" + prev + nextNumber));
    }
  };

  const handleClear = () => {
    setNumber(0);
    setOperation("");
    setAnswer(0);
  };

  const handleOperation = (op) => {
    // first number
    if (operation === "") {
      setAnswer(number);
    } else if (operation === OPERATION.MULTIPLICATION) {
      setAnswer((prev) => {
        return prev * number;
      });
    } else if (operation === OPERATION.SUBTRACTION) {
      setAnswer((prev) => {
        return prev - number;
      });
    } else if (operation === OPERATION.ADDITION) {
      setAnswer((prev) => {
        return prev + number;
      });
    } else if (operation === OPERATION.DIVISION) {
      setAnswer((prev) => {
        return prev / number;
      });
    }

    setResetInput(true);
    setOperation(op);
  };

  return (
    <>
      <div className="title-container">
        <h1>Calculator</h1>
      </div>
      <div className="calculator-container">
        <div className="input-container">
          <p>{showAnswer ? answer : number}</p>
        </div>
        <div className="buttons-container">
          <div className="button-row">
            <p onClick={handleClear}>AC</p>
            <p onClick={() => setNumber((prev) => -prev)}>+/-</p>
            <p>%</p>
            <p onClick={() => handleOperation(OPERATION.DIVISION)}>/</p>
          </div>
          <div className="button-row">
            <p onClick={() => handleNumberPress(1)}>1</p>
            <p onClick={() => handleNumberPress(2)}>2</p>
            <p onClick={() => handleNumberPress(3)}>3</p>
            <p
              className="button-operator"
              onClick={() => handleOperation(OPERATION.MULTIPLICATION)}
            >
              x
            </p>
          </div>
          <div className="button-row">
            <p onClick={() => handleNumberPress(4)}>4</p>
            <p onClick={() => handleNumberPress(5)}>5</p>
            <p onClick={() => handleNumberPress(6)}>6</p>
            <p
              className="button-operator"
              onClick={() => handleOperation(OPERATION.SUBTRACTION)}
            >
              -
            </p>
          </div>
          <div className="button-row">
            <p onClick={() => handleNumberPress(7)}>7</p>
            <p onClick={() => handleNumberPress(8)}>8</p>
            <p onClick={() => handleNumberPress(9)}>9</p>
            <p
              className="button-operator"
              onClick={() => handleOperation(OPERATION.ADDITION)}
            >
              +
            </p>
          </div>
          <div className="button-row">
            <p onClick={() => handleNumberPress(0)}>0</p>
            <p
              className="button-operator"
              onClick={() => {
                handleOperation();
                setShowAnswer(true);
                setNumber(answer);
              }}
            >
              =
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
