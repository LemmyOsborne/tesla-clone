import React, { useState } from 'react';
import { Container, Menu, RightMenu, CustomMenu, Button, BurgerNav, CloseButton } from './Header.style';
import { NavLink, useLocation } from 'react-router-dom';



export const Header = () => {
  const [toggleBurgerNav, setToggleBurgerNav] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      {["/", "/model-s", "/model-x", "/solarpanels"].includes(pathname)
        ? <Container color="black">
          <NavLink to="/">
            <img src="/images/logo.svg" alt="logo" />
          </NavLink>
          <Menu bgDefault>
            <NavLink to="/model-s">Model S</NavLink>
            <NavLink to="/model-3">Model 3</NavLink>
            <NavLink to="/model-y">Model Y</NavLink>
            <NavLink to="/model-x">Model X</NavLink>
            <NavLink to="/solarroof">Solar Roof</NavLink>
            <NavLink to="/solarpanels">Solar Panel</NavLink>
          </Menu>
          <RightMenu>
            <Button bgDefault>Shop</Button>
            <Button bgDefault>Account</Button>
          </RightMenu>
          <CustomMenu bgDefault onClick={() => setToggleBurgerNav(true)}>Menu</CustomMenu>
          <BurgerNav show={toggleBurgerNav}>
            <CloseButton onClick={() => setToggleBurgerNav(false)}>Close</CloseButton>
            <NavLink to="/model-s">Model S</NavLink>
            <NavLink to="/model-3">Model 3</NavLink>
            <NavLink to="/model-y">Model Y</NavLink>
            <NavLink to="/model-x">Model X</NavLink>
            <NavLink to="/solarroof">Solar Roof</NavLink>
            <NavLink to="/solarpanels">Solar Panel</NavLink>
            <NavLink to="#">Existing Inventory</NavLink>
            <NavLink to="#">Used Inventory</NavLink>
            <NavLink to="#">Trade-In</NavLink>
            <NavLink to="#">Test Drive</NavLink>
            <NavLink to="#">Cybertruck</NavLink>
            <NavLink to="#">Roadster</NavLink>
            <NavLink to="#">Semi</NavLink>
            <NavLink to="#">Charging</NavLink>
            <NavLink to="#">Powerwall</NavLink>
            <NavLink to="#">Commercial Energy</NavLink>
            <NavLink to="#">Utilities</NavLink>
            <NavLink to="#">Find Us</NavLink>
            <NavLink to="#">Investor Relations</NavLink>
          </BurgerNav>
        </Container >
        : <Container color="white">
          <NavLink to="/">
            <img src="/images/logo-white.svg" alt="logo" />
          </NavLink>
          <Menu>
            <NavLink to="/model-s">Model S</NavLink>
            <NavLink to="/model-3">Model 3</NavLink>
            <NavLink to="/model-y">Model Y</NavLink>
            <NavLink to="/model-x">Model X</NavLink>
            <NavLink to="/solarroof">Solar Roof</NavLink>
            <NavLink to="/solarpanel">Solar Panel</NavLink>
          </Menu>
          <RightMenu>
            <Button>Shop</Button>
            <Button>Account</Button>
          </RightMenu>
          <CustomMenu onClick={() => setToggleBurgerNav(true)}>Menu</CustomMenu>
          <BurgerNav show={toggleBurgerNav}>
            <CloseButton onClick={() => setToggleBurgerNav(false)}>Close</CloseButton>
            <NavLink to="/model-s">Model S</NavLink>
            <NavLink to="/model-3">Model 3</NavLink>
            <NavLink to="/model-y">Model Y</NavLink>
            <NavLink to="/model-x">Model X</NavLink>
            <NavLink to="/solarroof">Solar Roof</NavLink>
            <NavLink to="/solarpanels">Solar Panel</NavLink>
            <NavLink to="#">Existing Inventory</NavLink>
            <NavLink to="#">Used Inventory</NavLink>
            <NavLink to="#">Trade-In</NavLink>
            <NavLink to="#">Test Drive</NavLink>
            <NavLink to="#">Cybertruck</NavLink>
            <NavLink to="#">Roadster</NavLink>
            <NavLink to="#">Semi</NavLink>
            <NavLink to="#">Charging</NavLink>
            <NavLink to="#">Powerwall</NavLink>
            <NavLink to="#">Commercial Energy</NavLink>
            <NavLink to="#">Utilities</NavLink>
            <NavLink to="#">Find Us</NavLink>
            <NavLink to="#">Investor Relations</NavLink>
          </BurgerNav>
        </Container >}
    </>
  )
}
