import React , {useEffect} from 'react'

const Navbar = ({color}) => {
  // useEffect(() => {
  //   alert("color was changed")
  // }, [color])

  // Case1: Run on every render
  useEffect(() => {
    alert("Hey i will run on every render")
  })

// Case2: Run only on first render
useEffect(() => {
  alert("Hey This is first render")
}, [])

// Case3: Run only when certen values changed
useEffect(() => {
  alert("Hey i was running because color was changed")
}, [color])
//Example of  Cleanup function
 //using cleanup function by using return
 useEffect(() => {
  alert("This is the first render of app.jsx")
  return ()=>{
alert("component was unmounted")
  }
}, [])
  
  return (

    <div>
        i am navbar of {color} color hehe..
    </div>
  )
}

export default Navbar