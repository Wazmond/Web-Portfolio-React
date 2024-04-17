import styled from "styled-components";

const NavBar = styled.nav`
`;

const Box = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  width: 100%;
  box-shadow: 0 4px 5px #6e6e6e;
  padding: 5px;
  z-index: 9999;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const HomeContainer = styled.div`
  display: flex;
  margin-right: auto;   
`;

const LinkContainer = styled.div`
  display: flex;  
`;

const Link = styled.a`
  text-decoration: none;
  color: #000000;
  font-family: 'Courier New', Courier, monospace;
  font-size: 22px;
  margin: 0 5px;
`;

function Navbar() {
    return(
    <>
      <NavBar>
        <Box>
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
        </Box>
      </NavBar>
    </>
    );
};
export default Navbar