import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Button from './Button'




const Navbar = ({ color }) => {

  useEffect(()=> {
  // alert('Run on every render')
  })

  useEffect(() => {
    // alert('Run on first render')
  }, [])

  useEffect(() => {
    // alert('I am running bcoz Color was changed')
  }, [color])

  return (
    <>
    <div>
      <nav>
        <ul>
          <Link to="/">  <li>Home</li></Link>
          <Link to="/Login"> <li>Login</li></Link>
          <Link to="/About"> <li>About us</li></Link>
        </ul>
      </nav>
      {/* <p>The Navbar is of {color} color.</p> */}

    </div>
    <Button/>
</>
  )
}


export default Navbar