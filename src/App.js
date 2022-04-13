import React, { useState } from "react";
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    let incrementedCounter = counter + 1
    setCounter(incrementedCounter)
  }

  const decrementCounter = () => {
    let decrementedCounter = counter - 1
    setCounter(decrementedCounter)
  }


  
  const resetCounter = () => {
    let resetedCounter = 0
    setCounter(resetedCounter)
    if (resetedCounter === 0) {
      document.getElementById('tittleNumber').style.color = "black";
    }
  }

    if (counter > 0) {
    document.getElementById('tittleNumber').style.color = "green";
  } if (counter < 0) {
    document.getElementById('tittleNumber').style.color = "red";
  }


    
  return (

    <div className="App">
      <div id='tittle'>Counter</div>
      <div id='tittleNumber'>{counter}</div>
      <div>
        <button id="decrease" onClick={decrementCounter}>DECREASE</button>
        <button onClick={resetCounter}>RESET</button>
        <button id="increase" onClick={incrementCounter}>INCREASE</button>
      </div>
    </div>
  );
}

export default App;
