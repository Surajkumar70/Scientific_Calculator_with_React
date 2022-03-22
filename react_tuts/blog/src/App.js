import React, { useState, useEffect, useRef } from 'react'
import "./App.css"


function App() {
  const[result,setResult]=useState("")
  const inputRef = useRef(null)
  useEffect(() => inputRef.current.focus());


  function handleClick(f){
    setResult(result.concat(f.target.name))
  }

  //backspace
  function backspace(){
    setResult(result.slice(0,result.length-1))
  }

  //clear 
  function clear(){
    setResult("")
  }

  // factorial function
  function fact(){
    let f = 1

    for(let i=1; i<=parseInt(result); i++){
      f*=i
    }
    setResult(f)
  }

  
  function calculate(){

    try {
      setResult(eval(result).toFixed(2).toString())
      
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    
    <div className="calc-app">
      <h1 className="header">Calculator</h1>
      <link rel="icon" href="blog/src/favion.ico" type="image/blog/src/favion.ico"></link>
      
      <form>
        <input type="text" value={result} ref={inputRef}/>
      </form>
      <div className="keypad">
        <button onClick={clear} id='clear'>AC</button>
        <button onClick={backspace} id='backspace'>&#x2612;</button>
        <button name='%' onClick={handleClick}>&#x25;</button>
        <button name='/' onClick={handleClick}>&#xf7;</button>
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button name='*' onClick={handleClick}>&#xd7;</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button name='-' onClick={handleClick}>&#x2212;</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button name='+' onClick={handleClick}>&#x2b;</button>
        <button name='0' onClick={handleClick}>0</button>
        <button name='.' onClick={handleClick}>&#8729;</button>
        <button name='Math.sin((Math.PI/180)*'onClick={handleClick}>sin</button>
        <button name='Math.cos((Math.PI/180)*'onClick={handleClick}>cos</button>
        <button name='Math.tan((Math.PI/180)*'onClick={handleClick}>tan</button>
        <button onClick={fact}>!</button>

        <button onClick={()=> setResult(parseInt(result)**2)}>x<sup>2</sup></button>
        <button onClick={()=> setResult(parseInt(result)**(1/2))}>x<sup>1/2</sup></button>
        <button name='3.14' onClick={handleClick}>𝝿</button>

        <button name='(' onClick={handleClick}>&#40;</button>
        <button name=')' onClick={handleClick}>&#41;</button>
        <button onClick={calculate} id='result'>&#x3d;</button>
      </div>
      {/* <h1 classdown="header">SurajKumar</h1> */}
    </div>
  );
}
export default App;
