// Using tailwindcss in react by vite
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo "
    },
    {
      title: "Hey I am another todo",
      desc: "I am a good todotoo "
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but i am grocery "
    }
  ])
  //   const Todo = ({todo}) => {
  //     return (<>
  // <div className="m-4 border-2 border-purple-400">

  //       <div className="todo">{todo.title}</div>
  // <div className="todo">{todo.desc}</div>
  // </div>
  //     </>)
  //   }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* 1st type of rendering, when we use if-else */}
      {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}

      {/* 2nd type of rendering, use when only use if */}
      {/* {showbtn && <button>showbtn is true</button>} */}
      {/* It means if shownbtn is true thean show this button otherwise show nothing */}

{/* how to through map render a list */}
{/* using key prompt */}
      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>
        return <div key={todo.title} className="m-4 border-2 border-purple-400">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>

      })}

      <div className="card">

        {/* !showbtn ,if true it will make the value of showbtn false and if false it will make its value true */}
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


// ⚠Note⚠: when u make component inside a component make sure the first letter is capital letter otherwise u will see that component blank like:
// const ToDo = ()=>{
//     return (<>
//       <h1>Hello i am the TODO</h1>
//     </>)
//   }

// if you write it as toDo <-- which is not supported for some reason.
