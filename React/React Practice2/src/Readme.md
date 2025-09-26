React Router

npm install react-router-dom
import in App.jsx
import {createBrowerRouter} from 'react router dom'
Make a Navbar.jsx component
Make a list of Home, About and Contact in it.
Make list like this:
<Link to="/about"><1i>About</1i></Link>
<Link to="/home"><1i>Login</1i></Link>
<Link to="/contact"><1i>Login</1i></Link>
import Link like this in Navbar: import { Link } from 'react-router-dom'
inside function of App.jsx:
const router = createBrowerRouter([
    {path"/home",  
 element: <><Navbar/> <Home/></>
    },
   { path: /user/ : username" ,
element: <><Navbar/> <User/></>
 ])
import RouterProvider
import {createBrowerRouter, RouterProvider} from 'react router dom'
in return( add this:
    <RouterProvider router={router} / >
)

Create a component named User.jsx
inside div
<div>I am user{username}</div>
import useParams in User.jsx
import { useParams } from •react-router-dom'
inside user function add this: const params = useParams()
now update the div of User.jsx
<div>I am user{params.username}</div>


