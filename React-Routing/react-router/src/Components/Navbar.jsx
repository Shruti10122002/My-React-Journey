import React from 'react'
import Home from './Home'
import Dashboard from './Dashboard'
import { Link, NavLink } from 'react-router-dom'
import About from './About'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to='/' className={({isActive})=> isActive ? "active-Link":""}>Home</NavLink>

        </li>
        <li>
        <NavLink to='/about'className={({isActive})=> isActive ? "active-Link":""}>About</NavLink>
           

        </li>
        <li>
        <NavLink to='/dashboard'className={({isActive})=> isActive ? "active-Link":""}>Dashboard</NavLink>

        </li>
      </ul>
    </div>
  )
}

export default Navbar
