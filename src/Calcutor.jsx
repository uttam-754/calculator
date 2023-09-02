import React, { useState } from 'react'
import "./calcutor.css"
import numb from './calculator'
import BackspaceIcon from '@mui/icons-material/Backspace';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ViewStreamIcon from '@mui/icons-material/ViewStream';

const Calcutor = () => {
    const [value, setValue] = useState("");
    const [equal, setEqual] = useState("")

    const prop = ["%","/","*","+","-","."]

    const getData = (val) => {
        if(
            (prop.includes(val) && value === "") ||
            (prop.includes(val) && prop.includes(value.slice(-1))) 
            ){
                return;
            }
            setValue( value + val);

            if(!prop.includes(val)){
                setEqual(eval(value + val).toString())
            }
    }
    
    const result = () => {
        setEqual(eval(value).toString());
        setValue(equal)
    }
    return (
    <>
    <div className="container">
        <div className="box">
            <div className="inputValue">
                {value || "0"}
            </div>
            <div className="clr">
                <button onClick={()=>{setValue(value.slice(-1, 0))}}><DeleteForeverIcon/></button> 
                <button onClick={()=>{setValue(value.slice(0, -1))}}><BackspaceIcon/></button>
            </div>
            <div className="numBox">
            <div className="numbers">
                {numb(getData)}
                <button onClick={()=>{getData(".")}}>.</button>
                <button onClick={()=>{getData("0")}}>0</button>
                <button onClick={result} style={{color: "greenyellow"}} ><ViewStreamIcon/></button>
            </div>
            <div className="bodmas">
                <button onClick={()=>{getData("/")}}>/</button>
                <button onClick={()=>{getData("*")}}>*</button>
                <button onClick={()=>{getData("+")}}>+</button>
                <button onClick={()=>{getData("-")}}>-</button> 
            </div>
            </div>
        </div>
    </div>
    </>

    )
}

export default Calcutor