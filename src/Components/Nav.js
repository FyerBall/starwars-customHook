import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <ul>
        <NavLink to='/'>People</NavLink>
        <NavLink to='/planets'>Planets</NavLink>
        <NavLink to='/ships'>Star Ships</NavLink>
      </ul>
    </nav>
  )
}

export default Nav
