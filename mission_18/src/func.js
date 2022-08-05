import React, {useState, useEffect} from 'react';


function Func(props){
    const [memo, setmemo] = useState(JSON.parse(localStorage.getItem('memo')) || []);
    const [value, setvalue] = useState("");
    let onchange = (e) => {
        setvalue(e.target.value);
    }
    let onkeydown = (e) =>{
        var number = 0;
        if (e.key === 'Enter'){
            const newmemo = [...memo, value]
            localStorage.setItem('memo', JSON.stringify(newmemo))
            setmemo(newmemo)
            setvalue("")
        }
        

    }
    return (
        <div>
            <h1>메모</h1>
            <input onChange={onchange}onKeyDown={onkeydown}value={value}/>
            <div>
                {
                    memo.map((e)=>{
                        return <div>{e}</div>;
                    })
                }
            </div>
        </div>
        
    );
}

export default Func;