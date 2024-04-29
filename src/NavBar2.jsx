import styled from "styled-components"
import useState from "react";

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
const LinkContainer = styled.div``;

const Link = styled.a`
    text-decoration: none;
    font-family: Kanit;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: auto 2px;
    color: #0a0035;
    padding: 0 5px;

    &:hover {
      /* text-decoration: underline; */
      background-color:#0a00351c;
      transition: all 0.1s;
      justify-self: center;
      align-self: center;
    }
`;

const Line = styled.div`
    content: '';
    align-self: center;
    width: 98%;
    height: 0px;
    border: 1px solid #0a0035;
    `;

export default function Navbar() {
    return(
        <NavBar>
          <Container>
            <HomeContainer>
              <Link href="#home">HOME</Link> 
            </HomeContainer>
            <LinkContainer>
              <Link href="#about">ABOUT</Link>
              <Link href="#projects">PROJECTS</Link>
              <Link href="#contact">CONTACT</Link>
            </LinkContainer>
          </Container>
          <Line />
        </NavBar>
   )
}