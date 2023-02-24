import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import astronomy from '../assets/images/astronomy-navbar-img.jpeg'
import logo from '../assets/images/logo.png'

const Navbar = () => {

  return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <div style={{flex: 1}} className="logo">
                <div>
                    <Link to={{pathname: "/"}}><img src={logo} /></Link>
                    <h1>Hemant</h1>
                </div>
            </div>
            <div style={{flex: 2}} className="navbar-img">
                <img src={astronomy}/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar