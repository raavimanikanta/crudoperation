import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <nav style={{display:"flex",justifyContent :"space-evenly",border:"2px solid green",height:"70px",backgroundColor:"pink"}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

            {/* <Link to="/home" className="homecss" >Home</Link>
                 <Link to="/student" className="homecss" >Students</Link>
                 <Link to="/contact" className="homecss" >Contact</Link> */}
        </nav>
    </div>
  )
}

export default Navbar