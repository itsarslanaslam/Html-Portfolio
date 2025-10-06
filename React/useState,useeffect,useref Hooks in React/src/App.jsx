import { useState } from 'react'
import { useRef, useEffect } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [data, setData] = useState("1kg")
  const refElement = useRef(" ")
  function resetFnc(){
    setName(" ");
    refElement.current.focus()
  }
  function handleChange(){
    refElement.current.style.color = 'blue'
  }
  

//it runs automatically when page is reloaded and when state is updated.
  // useEffect(()=>{
  //   console.log("H1");
  // })

  //to make it stop runs automatically when page is reloaded and when state is updated we use its 2nd parameter which is [].
    useEffect(()=>{
    console.log("H1");
  }, [data]);


  return (
    <>
     <input ref={refElement} type="text" value={name} onChange={(e)=> setName(e.target.value)} />
     <button onClick={resetFnc}>Reset</button>
     <button onClick={handleChange}>Handle Change</button>
     <input type="text" placeholder={data} />
     <button onClick={()=>{setData("2kg")}}>Change Data</button>
    </>
  )
}

export default App
