import styled from "styled-components";
import { HomePage, TextContainer} from "./PageData/Home"

const Psegment = styled.div`
    /* border: 5px solid black; */
    background-color: #dcdcfa;
    width: 100%;
    height: 100vh;
    scroll-margin-top: 47px;
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
    height: 47px;
    margin: 0;
    padding: 0;
`;


export default function Page() {
    return(
        <>
            <Psegment id="home"> 
                    <HomePage> 
                        <TextContainer>
                            <h1>Hi I'm <name>Ryuichi Nakamura</name></h1>
                            <p>I'm an aspiring developer based in Sydney.</p>
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