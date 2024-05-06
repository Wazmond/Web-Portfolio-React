import styled from "styled-components"
import React, { useState } from "react";



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  const Navigation = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  `;

  const NavBar = styled.div`
      position: fixed;
      width: 100vw;
      background-color: #dcdcfa;
      z-index: 9999;
      scrollbar-gutter: stable;
      overflow: auto;
      height: 55px;

      display: flex;
      flex-direction: column;
  `;

  const Container = styled.div`
      display: flex;
      flex-direction: row;
      padding: 10px 10px;
      height: calc(55px - 2px);

  `;
  const HomeContainer = styled.div`
      margin-right: auto;
  `;
  const LinkContainer = styled.div`
    display: none;
    @media screen and (min-width: 550px){
      display: block;
    }
  `;

  const Link = styled.a`
    text-decoration: none;
    font-family: Kanit;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: auto 2px;
    color: #0a0035;
    padding: 0 5px;

    border-radius: 5px;

    transition: all 200ms ease-out;
    &:hover {
      background-color:#0a00351c;
      justify-self: center;
      align-self: center;
      letter-spacing: 5px;
    }
  `;

  const Line = styled.div`
    content: '';
    align-self: center;
    width: 98%;
    height: 0px;
    border: 1px solid #0a0035;
  `;

  const MenuButton = styled.button`
    display: none;
    background-color: transparent;
    border: none;
    align-items: center;
    margin-right: 2px;

    @media only screen and (max-width:500px) {
      display: flex;
      &:hover {
        cursor: pointer;
      }
    }
  `;
  const MenuLogo = styled.img`
      height: 20px;
      width: 35Px;
  `;
  const MenuContainer = styled.div`
    position: fixed;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    top: 55px;
    width: 100vw;    
    z-index: 1000;

    transition: all 200ms ease-in;
    transform: translateY(55px);
    /* ${ isMenuOpen } && {
      transform: translateY(55px)
    } */
    transform: ${({ isMenuOpen }) => (isMenuOpen ? "translateY(55px)" : "none")};
    /*transition: ${({ isMenuOpen }) => (isMenuOpen ? "all 500ms ease-in" : "none")}; */
  `;
  const MenuLink = styled.a`
    text-decoration: none;
    font-family: Kanit;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: auto 2px;
    color: #0a0035;
    padding: 0 5px;

    text-align: center;
    width: 100%;
    &:hover {
      background-color: #d1d1d1;
    }
    background-color: white;
  `;

return(
  <Navigation>
    <NavBar>
      <Container>
        <HomeContainer>
          <Link href="#home">HOME</Link> 
        </HomeContainer>
        <MenuButton onClick={toggleMenu}>
          <MenuLogo src="./src/Logos/menu_logo.png" alt="menulogo" />
        </MenuButton>
        <LinkContainer>
          <Link href="#about">ABOUT</Link>
          <Link href="#projects">PROJECTS</Link>
          <Link href="#contact">CONTACT</Link>
        </LinkContainer>
      </Container>
      <Line />
    </NavBar>

    <MenuContainer isMenuOpen={isMenuOpen} >
      <MenuLink href="#home">HOME</MenuLink> 
      <MenuLink href="#about">ABOUT</MenuLink>
      <MenuLink href="#projects">PROJECTS</MenuLink>
      <MenuLink href="#contact">CONTACT</MenuLink>
    </MenuContainer>
  </Navigation>
)
}