import React from 'react';
import { Container, Menu, RightMenu } from './Header.style';


export const Header = () => {
  return (
        <Container>
          <a href="#">
            <img src="/images/logo.svg" alt="logo" />
          </a>
          <Menu>
            <a href="#">Model Y</a>
            <a href="#">Model S</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>
          </Menu>
          <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
          </RightMenu>
        </Container>
    )
}
