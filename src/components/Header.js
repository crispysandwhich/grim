import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="mainHeader">

      <h2 className="logo">Grimmory</h2>

      <nav className="mainNav">
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tribute">Tribute</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header
