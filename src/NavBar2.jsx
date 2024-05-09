import styled from "styled-components"
import React, { useState, useRef, useEffect } from "react";
import menulogo from "/src/Logos/menu_logo.png";
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

  @media only screen and (max-width:549px) {
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
  @media only screen and (max-width:549px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;    
    z-index: 1000;
    top: -66px;
    border-bottom: 1px solid #0a0035;

    transition: all 100ms ease-out;
    transform: ${({ isMenuOpen }) => (isMenuOpen ? "translateY(121px)" : "none")};
  }
 
`;

const MenuLink = styled.a`
  text-decoration: none;
  font-family:  Kanit;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: auto 2px;
  color: #0a0035;
  padding: 0 5px;

  text-align: center;
  width: 100%;
  &:hover {
    background: linear-gradient(90deg, #dcdcfa 10%, #cacaff 50%, #dcdcfa 90%);
  }
  background-color: #dcdcfa;
  
`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    console.log("Menu button clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let timer;

    const handleOutsideClick = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        document.removeEventListener("click", handleOutsideClick);
      }
    };
    
    if (isMenuOpen) {
      timer = setTimeout(() => { document.addEventListener("click", handleOutsideClick)}, 150);
    }
  }, [isMenuOpen]);

  return(
    <Navigation>
      <NavBar>
        <Container>
          <HomeContainer>
            <Link href="#home">HOME</Link> 
          </HomeContainer>
          <MenuButton onClick={toggleMenu}>
            <MenuLogo src={menulogo} alt="menulogo" />
          </MenuButton>
          <LinkContainer>
            <Link href="#about">ABOUT</Link>
            <Link href="#projects">PROJECTS</Link>
            <Link href="#contact">CONTACT</Link>
          </LinkContainer>
        </Container>
        <Line />
      </NavBar>

      <MenuContainer ref={menuRef} isMenuOpen={isMenuOpen} >
        <MenuLink href="#home">HOME</MenuLink> 
        <MenuLink href="#about">ABOUT</MenuLink>
        <MenuLink href="#projects">PROJECTS</MenuLink>
        <MenuLink href="#contact">CONTACT</MenuLink>
      </MenuContainer>
    </Navigation>
  )
}