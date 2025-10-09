import React from 'react'
import { useContext } from 'react'
import {data, data1} from '../App'


const Child3 = () => {
    const first = useContext(data);
const gen = useContext(data1);
  return (
    <div>
<h1>Name is {first} and gender is {gen}</h1>

    </div>
  )
}

export default Child3
