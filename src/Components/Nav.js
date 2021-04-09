import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Nav() {
  return (
    <Wrapper>
      <ul>
        <NavLink to='/'>People</NavLink>
        <NavLink to='/planets'>Planets</NavLink>
        <NavLink to='/ships'>Star Ships</NavLink>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 50px;
  background: #1e1f23;
  box-shadow: var(--box-shadow);
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    a {
      border-radius: 50px;
      background: #16171a;
      box-shadow: 20px 20px 60px #131416, -20px -20px 60px #191a1e;
      padding: 15px 50px;
    }
  }
`

export default Nav
