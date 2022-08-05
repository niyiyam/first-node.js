import React, {useState, useEffect} from 'react';


function func{
    const [number, setnumber] = useState(0);
    let Increase = () => {
        setnumber(number + 1);
    }
    let Decrease = () => {
        setnumber(number -1);
    }
    useEffect(() =>{
        if (number > 10){
            console.log('10을 넘으셨군요')
        }
    },[number])

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-1</button>
        </div>
    );
}

export default func;