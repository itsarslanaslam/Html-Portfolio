import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_640.jpg" alt="" width={233} 
        style={{border: "2px solid black"}}/>
    <h1>
        {props.title}
    </h1>
    <p>{props.description}</p>
    </div>
  )
}

export default Card