import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import { counterContext } from './context/context'
// import Todo from './components/Todo'
import './App.css'



function App(){
const [count, setCount] = useState(0)
const [price, setPrice] = useState(0)
const [color, setColor] = useState(0)



//useEffect
useEffect(()=>{
// alert('Count was changed')
setColor(color+1)
}, [count])


useEffect(()=>{
  // alert('price is changed')
},[price])


//useRef
//Usecase 1
const a = useRef(0)
useEffect(()=>{
a.current = a.current + 1
console.log(`The value of a is ${a.current} `);
})

//usecase 2
const ref = useRef()
useEffect(()=>{
console.log("First Rendering");
ref.current.style.backgroundColor= 'red'
},[])

const btnRef2 = useRef()
useEffect(()=>{
console.log("Rendering");
btnRef2.current.style.backgroundColor= 'blue'
},[])

const[showbtn, setShowbtn] = useState(true)


//State For List Rendering
const [todos, setTodo] = useState([
  {
title: "HEY",
desc: "I am a good todo"
}
,
{
title: "HEY Another Todo",
desc: "I am a good todo too"
}
,
{
title: "HEY 3rd Todo",
desc: "I am a good todo too too"
}
])


//Event Handling
const handleClick=()=>{
  alert("I am clicked!")
}

const handleMouseOver=()=>{
  alert('Box is/was hovered!')
}


//Input Event Handler
const[name, setName] = useState("Ezio")
const handleChange = (e)=>{
  setName(e.target.value)
}

const [form, setForm]=useState({email:"", phone:"" })
const handleForm = (e)=>{
  setForm({...form, [e.target.name]:e.target.value})
  console.log(form);
}
// Practicing Input Event Handler
const [password, setPassword] = useState({password: "Alice"})
  const handlePassword = (e) =>{
  setPassword({...password,[e.target.name]:e.target.value})
}

// Practicing Input Event Handler
const[address, setAddress] = useState({country: 'Your Country?'})
const handleAddress = (e) =>{
  setAddress({...address, [e.target.name]: e.target.value})
}


//React Router
const router = createBrowserRouter([
  {
path: "/",
element:<><Navbar/> <Home/></>
  }
  ,
  {
path: "/Login",
element: <><Navbar/> <Login/></>
  }
  ,
  {
    path: "/About",
    element: <><Navbar/> <About/></>
  }
])




  return (
    <>
    <counterContext.Provider value={count}>



      {/* <Navbar color="Navy Blue"/>  Can also write like this */}
      {/* <Navbar color={"light " + "red" + color}/> */}
      <RouterProvider router={router}/>
      <div className="card-container">
      <Cards title="Card no: 1" description="I am the 1st card."/>
       <Cards/>
        <Cards/>
         <Cards title="Card no: 4" description="I am the 4th card."/>
         </div>
         <div className='btn'> The value of count is: {count}
         <button ref={ref} className='btn1' onClick={()=> {setCount(count+1)}}>Click Me</button>
         </div>
         <br />
              <div className='dprice'>The value of price is: {price}
      <button ref={btnRef2} className='btn2' onClick={()=>{setPrice(price+10)}}>Set Price</button>
      </div>
      <br />
      <div className="action">Click the button to see an action!
      <button className='btn3 bg-purple-700' onClick={()=>{btnRef2.current.style.display = "none"}}>Click Me</button>
      </div>
<br />
      {/* Conditional Rendering */}
       {/* method to use if-else  */}
{showbtn?<button className='showbtn bg-pink-400'>showbtn is true</button>: (<button className='innerbtn'>showbtn is false</button>)}
{/* Simply way for the above method */}
{/* {showbtn?<button className='showbtn bg-pink-400'>showbtn is true</button>: "showbtn is false"} */}
           {/* Another method for using only if statement */}
          {showbtn && <button className='showbtn1 bg-orange-400'>showbtn is true</button>}
      <br />
        <button className='showbtn2 bg-gray-400' onClick={()=>{setShowbtn(!showbtn)}}>Click to hide</button>


{/* List Rendering */}
{todos.map(todo=>{
      // <Todo key={todo.title} todo = {todo} />

  return(
    <div key={todo.title} className='m-4 border-2 border-purple-400'>
      <p>{todo.title}</p>
      <p>{todo.desc}</p>
    </div>
  )
})}

{/* Event Handling */}
<div>
  <button className="ebutton" onClick={handleClick}>Click Me</button>
</div>

<div className="red" onMouseOver={handleMouseOver}>I am a red box</div>
 


{/* Input Event Handler */}
<input className='input' type="text" value={name} onChange={handleChange} />
<br />
<input className='input' name='email' type="text" value={form.email} onChange={handleForm} />
<input className='input' name='phone' type="text" value={form.phone} onChange={handleForm}/>
{/* Another method, if state is empty like useState('') */}
{/* <input className='input' name='phone' type="text" value={form.phone?form.phone:""} onChange={handleForm}/>
<input className='input' name='phone' type="text" value={form.email?form.email:""} onChange={handleForm}/> */}
<br />
{/* Practicing Input Event Handler */}
<input className='input' type="password" name='password' value={password.password} onChange={handlePassword} />
<input className='input' type="text" name='country' value={address.country} onChange={handleAddress}  />
  






  <Footer/>  
  </counterContext.Provider>
    </>
  )
  }


export default App
