import React from 'react'
import './Cards.css'
const Cards = (props) => {
  return (
    <div className='card' style={{overflow:"hidden"}}>
                <img src="https://wallpapercat.com/w/full/4/c/2/17001-3840x2160-desktop-4k-mountain-wallpaper.jpg" alt="img" width={333} style={{border:"2px solid black"}}/>
        <h1>Cards Number: {props.title}</h1>
        <p>Description: {props.description}</p>
    </div>
    
  )
}

export default Cards