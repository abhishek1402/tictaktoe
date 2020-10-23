import React, { useState, useEffect } from 'react';
import './App.css';
let count = 1;
const winArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
function App() {
  const [value, setValue] = useState([null, null, null, null, null, null, null, null, null]);
  const squareClicked = (index) => {
    if (count < 10 && !value[index]) {
      let arr = [...value];
      let v;
      if (count % 2 == 0) {
        v = 0
      }
      else { v = "X" }
      count++;
      arr[index] = v
      setValue(arr)
    }
  }
  useEffect(() => {
    let roundWon = false;
    let winner
    for (let i = 0; i <= 7; i++) {
      const arrValue = winArr[i];
      if ((value[arrValue[0]] && value[arrValue[1]] && value[arrValue[2]]) && (value[arrValue[0]] === value[arrValue[1]] && value[arrValue[1]] === value[arrValue[2]])) {
        roundWon = true;
        winner = arrValue[0]
        break
      }
    }
    if (roundWon) {
      alert(`${winner} won`)
    }
  }, [value])
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="square" onClick={() => squareClicked(0)}>
            {value[0]}
          </div>
          <div className="square" onClick={() => squareClicked(1)}>

            {value[1]}
          </div>
          <div className="square" onClick={() => squareClicked(2)}>

            {value[2]}
          </div>
        </div>
        <div className="row">
          <div className="square" onClick={() => squareClicked(3)}>
            {value[3]}
          </div>
          <div className="square" onClick={() => squareClicked(4)}>

            {value[4]}
          </div>
          <div className="square" onClick={() => squareClicked(5)}>

            {value[5]}
          </div>
        </div>
        <div className="row">

          <div className="square" onClick={() => squareClicked(6)}>
            {value[6]}
          </div>
          <div className="square" onClick={() => squareClicked(7)}>

            {value[7]}
          </div>
          <div className="square" onClick={() => squareClicked(8)}>

            {value[8]}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
