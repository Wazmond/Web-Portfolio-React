import styled from "styled-components";
import "./PageCSS/Home.css"


const Psegment = styled.div`
    border: 5px solid black;
    width: 100%;
    height: 100vh;
    scroll-margin-top: 35px;
`;

const HomePage = styled.div``;
const TextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 10%;
    margin-top: -53.5px;

    color: #0a0035;
    font-family: kanit;
    font-size: 24px;
    letter-spacing: 4px;
    h1 {
        font-weight: normal;
    }
    name {
        font-weight: bold;
    }
    p {
        font-size: 27.5px;
        letter-spacing: 1px;
    }
`;
const About = styled.div`
    background-color: greenyellow;
`;
const Projects = styled.div`
    background-color: greenyellow;  
`;
const Experience = styled.div`
    background-color: greenyellow;
`;
const Education = styled.div`
    background-color: greenyellow;
`;
const Contact = styled.div`
    background-color: greenyellow;
`;

const Gap = styled.div` // Used at the very top, under navbar
    background-color: #01b7ff;
    opacity: 35%;
    height: 35px;
    margin: 0;
    padding: 0;
`;


export default function Page() {
    return(
        <>  <Gap />
            <Psegment id="home"> 
                    <HomePage> 
                        <TextContainer>
                            <h1>Hi I'm <name>Ryuichi Nakamura</name></h1>
                            <p>I'm an Entry-Level Developer based in Sydney.</p>
                        </TextContainer>
                    </HomePage>
            </Psegment>
            <Psegment  id="about">
                    <About>
                        <h1>ABOUT</h1>
                        <p>desc</p>
                    </About>
            </Psegment>
            <Psegment id="projects">
                    <Projects>
                        <h1>PROJECTS</h1>
                        <p>desc</p>
                    </Projects>
            </Psegment>
            <Psegment id="experience">
                    <Experience>
                        <h1>EXPERIENCE</h1>
                        <p>desc</p>
                    </Experience>
            </Psegment>
            <Psegment id="education">
                    <Education>
                        <h1>EDUCATION</h1>
                        <p>desc</p>
                    </Education>
            </Psegment>
            <Psegment id="contact">
                    <Contact>
                        <h1>CONTACT</h1>
                        <p>desc</p>
                    </Contact>
            </Psegment>
        </>
    );
};