import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Cards from "./components/Cards"
import './App.css'

function App() {
const [count, setCount] = useState(10)
const [name, setName] = useState("")
const [roll, setRoll] = useState("")
const [submitted, setSubmitted] = useState(false)

 return (
  <>

<Navbar/>
<main>This is main site</main>
<div className="cards">

<Cards title="1st" description="This is first card"/>
<Cards/>
<Cards/>
<Cards title="4rd" description="This is last card"/>
</div>
<div>The value of count is {count}</div>
<button onClick={()=> {setCount(count+1)}}>Update Count</button>

<form onSubmit={e => {e.preventDefault(); setSubmitted(true);}} style={{marginTop: '20px'}}>

  <label>
    Name:

    <input type="text" value={name} onChange={e => setName(e.target.value)} required />
  </label>
  <br />
  <label>
    Rollnumber:

    <input type="text" value={roll} onChange={e => setRoll(e.target.value)} required />
  </label>
  <br />
  <button type="submit">Submit</button>
</form>
{submitted && (
  <div style={{marginTop: '10px'}}>
    <strong>Submitted Data:</strong><br />
    Name: {name}<br />
    Rollnumber: {roll}

  </div>
)}
<Footer/>
  </>
  )
}

export default App
