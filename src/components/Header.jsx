import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  position: fixed;
  width: 100%;
  max-width: 800px;
  background: white;
  top: 0;
  padding-top: 20px;
  z-index: 10;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 18px;
  img{
    height: 35px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
`;

const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  background: white;
  //padding: 20px;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  height: 80px;
`;



function HeaderComponent() {
    return (
        <Container>
            <Header>
                <Logo><Link to={'/'}><img src={'/logo.png'}/></Link></Logo>
                <Nav>
                    <NavItem href="#">Home</NavItem>
                    <NavItem href="#">Services</NavItem>
                </Nav>
            </Header>
        </Container>

    );
}

export default HeaderComponent;