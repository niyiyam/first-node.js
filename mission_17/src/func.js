import React, {useState, useEffect} from 'react';


function Func(props){
    const [number, setnumber] = useState(Number(localStorage.getItem('currentNumber')) || 0);
    let Increase = () => {
        setnumber(number + 1);
    }
    let Decrease = () => {
        setnumber(number -1);
    }
    let onchange = (e) => {
        setnumber(Number(e.target.value));
    }
    useEffect(()=>{
        localStorage.setItem('currentNumber', Number(number))
        console.log(localStorage.getItem('currentNumber'))
    },[number])

    return (
        <div>
            <h1>{number}</h1>
            <input onChange={onchange} value={number} />
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-1</button>
        </div>
    );
}

export default Func;