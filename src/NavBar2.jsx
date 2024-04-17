import styled from "styled-components"

const NavBar = styled.div`
    position: fixed;
    width: 100%;
    background-color: #dcdcfa;
    z-index: 9999;
`;

const Container = styled.div`
    display: flex;
    padding: 10px 10px;
    `;
const HomeContainer = styled.div`
    margin-right: auto;
`;
const LinkContainer = styled.div``;
const Link = styled.a`
    text-decoration: none;
    font-family: Kanit;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 0 5px;
    color: #0a0035;
`;

const Line = styled.div`
    position: absolute;
    left: 1vh;
    
    content: '';
    background-color: #0a0035;
    width: 98%;
    height: 2px;
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
              <Link href="#experience">EXPERIENCE</Link>
              <Link href="#education">EDUCATION</Link>
              <Link href="#contact">CONTACT</Link>
            </LinkContainer>
          </Container>
          <Line />
        </NavBar>
   )
}