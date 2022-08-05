import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';


function App() {
  const [number, setnumber] = useState(0);
  let Increase = () => {
    setnumber(number + 1);
  }
  let Decrease = () => {
    setnumber(number - 1);
  }
  let Reset = () => {
    setnumber(0);
  }
  useEffect(() => {
    if (number > 10){
      setnumber(0);
      console.log('10이 넘어버렸네요')
    }}, [number]);
  return (
    <div className='App'>
        <h1>{number}</h1>
        <button onClick={Increase}>+1</button>
        <button onClick={Decrease}>-1</button>
        <button onClick={Reset}>리셋</button>
    </div>
);
}

export default App;
