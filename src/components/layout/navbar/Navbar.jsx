import React from 'react'
import { Link, Logo, NavLinks, StyledNav, ThemeIcon } from '../../../styles/NavbarStyles'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div>
        <StyledNav>
            <Logo>Wood<span>Food</span></Logo>
            <NavLinks>
                <Link href='#'>All menus</Link>
                <Link href='#'>Delivery</Link>
                <Link href='#'>Bar</Link>
                <Link href='#'>Contact</Link>
            </NavLinks>
            <ThemeIcon onClick={toggleTheme}>
                { theme === 'light' ? <FaMoon /> : <FaSun />}
                
            </ThemeIcon>
        </StyledNav>
    </div>
  )
}

export default Navbar