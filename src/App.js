import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
//Not using this the other functions inside this handleSubmit makes the page Blank.
  function handleSubmit(e) {
    e.preventDefault();

    const calc = e.target.name;
    const inputValue = Number(inputRef.current.value);

    switch (calc) {
      case "plus":
        setResult((prevResult) => prevResult + inputValue);
        break;
      case "minus":
        setResult((prevResult) => prevResult - inputValue);
        break;
      case "times":
        setResult((prevResult) => prevResult * inputValue);
        break;
      case "divide":
        setResult((prevResult) => prevResult / inputValue);
        break;
      case "resetInput":
        inputRef.current.value = "";
        break;
      case "resetResult":
        setResult(0);
        break;
      default:
        break;
    }
  }
  return (
    <div className="App">
      <div>
        <h1>Simple Calculator</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <p ref={resultRef}> The Result is {result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button type="button" name="plus" onClick={handleSubmit}>
          Add
        </button>
        <button type="button" name="minus" onClick={handleSubmit}>
          Subtract
        </button>
        <button type="button" name="times" onClick={handleSubmit}>
          Multiply
        </button>
        <button type="button" name="divide" onClick={handleSubmit}>
          Divide
        </button>
        <button type="button" name="resetInput" onClick={handleSubmit}>
          Reset Input
        </button>
        <button type="button" name="resetResult" onClick={handleSubmit}>
          Reset Result
        </button>
      </form>
    </div>
  );
}

export default App;
