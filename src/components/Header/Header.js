import React, { useState } from 'react';
import { Container, Menu, RightMenu, CustomMenu, Button, BurgerNav, CloseButton } from './Header.style';
import { NavLink } from 'react-router-dom';



export const Header = () => {
  const [toggleBurgerNav, setToggleBurgerNav] = useState(false)

  return (
    <Container>
      <NavLink to="/">
        <img src="/images/logo.svg" alt="logo" />
      </NavLink>
      <Menu>
        <NavLink to="">Model S</NavLink>
        <NavLink to="">Model 3</NavLink>
        <NavLink to="/model-y">Model Y</NavLink>
        <NavLink to="">Model X</NavLink>
        <NavLink to="">Solar Roof</NavLink>
        <NavLink to="">Solar Panel</NavLink>
      </Menu>
      <RightMenu>
        <Button>Shop</Button>
        <Button>Account</Button>
      </RightMenu>
      <CustomMenu onClick={() => setToggleBurgerNav(true)}>Menu</CustomMenu>
          <BurgerNav show={toggleBurgerNav}>
            <CloseButton onClick={() => setToggleBurgerNav(false)}>Close</CloseButton>
            <NavLink to="">Existing Inventory</NavLink>
            <NavLink to="">Used Inventory</NavLink>
            <NavLink to="">Trade-In</NavLink>
            <NavLink to="">Test Drive</NavLink>
            <NavLink to="">Cybertruck</NavLink>
            <NavLink to="">Roadster</NavLink>
            <NavLink to="">Semi</NavLink>
            <NavLink to="">Charging</NavLink>
            <NavLink to="">Powerwall</NavLink>
            <NavLink to="">Commercial Energy</NavLink>
            <NavLink to="">Utilities</NavLink>
            <NavLink to="">Find Us</NavLink>
            <NavLink to="">Investor Relations</NavLink>
          </BurgerNav>
    </Container>
  )
}
