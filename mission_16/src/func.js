import React, {useState} from 'react';


function Func(props){
    const [number, setnumber] = useState(0);
    let Increase = () => {
        setnumber(number + 1);
    }
    let Decrease = () => {
        setnumber(number -1);
    }
    let onchange = (e) => {
        setnumber(e.target.value);
    }

    return (
        <div>
            <h1>{number}</h1>
            <input onChange={onchange} />
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-1</button>
        </div>
    );
}

export default Func;