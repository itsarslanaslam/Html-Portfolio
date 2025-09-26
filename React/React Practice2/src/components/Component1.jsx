import React,{useContext} from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
    const counter = useContext(counterContext)
  return (
<>
<p>Use of useContext hook</p>
 <div className='comp'>{counter}</div>
 </> 
  )
}

export default Component1