import React, { createContext } from 'react'
import './App.css'
import Child1 from './components/Child1';

  const data = createContext();
  const data1 = createContext();
function App() {
    const name = "Alp"
const gender = "Male"


  return (
    <>
    <data.Provider value={name}>
      <data1.Provider value={gender}>
    <Child1 />
    </data1.Provider>
    </data.Provider>
    </>
  )
}

export default App
export {data, data1}
