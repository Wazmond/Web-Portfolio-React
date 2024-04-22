import styled from "styled-components";
import { HomePage, HomeTextContainer} from "./PageData/Home"
import { About, AboutTextContainer, AboutTimeLineContainer } from "./PageData/About"
import { Projects, 
    ProjectsContainer, 
    ProjectsCard, 
    // ProjectsDisplay, 
    // ProjectsDescription, 
    ProjectsTitle } from "./PageData/Projects"


const PagesContainer = styled.div`
    background-color: #dcdcfa;
    width: 100%;
    `;
const Psegment = styled.div`
    /* border: 5px solid black; */
    width: 100%;
    height: 100vh;
    scroll-margin-top: 47px;
`;

const Guideline = styled.div`
    border: 1px solid black;
    width: 0;
    height: 50vh;
    position: relative;
    left: 50%;
    margin-left: -0.5px;
    margin-bottom: calc(50vh - 56.5px);
    padding: 0;
`;
/* -x-x-x-x- TO DO LIST -x-x-x-x-

Design the theme of website more.
    Key being minimalistic, clean, simple yet with many features or details.
Make a custom scroll bar to suit the current layout of light blue + dark blue
Make a prompt or signal of somesorts to tell you to scroll down
    an animated arrow sign pointing down
    simple line going down
Make a button that brings you to the very top of the screen
@media function to change layout of website if it becomes smaller
    Smaller or viewing from a phone etc.
    Menu button that shows all the options but in a sleeker way?
Interactive buttons
    Navbar could be more interactive. Change pointer to default when hovering over options.
        Animated hover underlines? 
        Box around options that becomes shaded?
        Font gets bigger possibly on hover?
            Letter spacing or font size
    In About section, an interactive timeline?
        More details on click or images etc.
Create some sort of animated background
    Blur bubble on pointer?
    Animated mural/design
    Animated face? thats responsive.
    Text animation?
        Text might scale out or change from opacity 0 to 100 in x time etc.
        Text like from TeneT? or something that might rotate?

import socials in forms of logos that hrefs to a link
    including (GitHub, LinkedIn, )
Think of an image or design to put on screen as its very empty. 
    Photo of myself? maybe animated?

About,
Think of an about description
Could possibly include my experience there too (work history)
    Could make it a timeline since birth (birth, school(s), jobs, hobbies(maybe) and commitments)
    possibly interactive? where you click, more details show up.

Projects,
Create a grid like structure. where you have an image, and a description underneath it.
Things to include so far. basic google app script for sheets (SDS call log functions)
    Current Website(s)?

Contacts
Include info like my email address or phone number.
    in forms of logos etc and when you click, it makes you open your email to my email address
        Could even make it have a 'template' or a placeholder in the email saying "I want to hire you" etc or some sort of placeholder.
Possibly come up with my own logo? and display it
*/


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

function Age() {
    var today = new Date();
    var birthDate = new Date(2001, 10, 25);

    var age = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export default function Page() {
    return(
        <>
        <PagesContainer>
            <Psegment id="home"> 
                    <HomePage> 
                        <HomeTextContainer>
                            <h1>Hi I'm <name>Ryuichi Nakamura</name></h1>
                            <p>I'm an aspiring developer based in Sydney.</p>
                        </HomeTextContainer>
                    </HomePage>
            </Psegment>
            <Guideline />
            <Psegment  id="about">
                    <About>
                        <AboutTextContainer>
                            <h1>ABOUT</h1>
                            <p>Self taught <Age />y.o aspiring developer on a journey.</p>
                            <p>Having developing knowledge in react, javascript, html/css, and C,</p>
                            <p>HELP ME, HELP YOU</p>
                            <p>But what keeps me going, is I just want to make some cool stuff, really.</p>
                        </AboutTextContainer>
                        <AboutTimeLineContainer />
                        {/* Could make a time line, interactive. it can be from a button or from mouse movement? left back to the past and right to the present. man can get bigger and smaller
                        this can make the use of an education  */}
                    </About>
            </Psegment>
            <Psegment id="projects">
                    <Projects>
                        <ProjectsTitle>PROJECTS</ProjectsTitle>
                        <ProjectsContainer>
                            <ProjectsCard />
                        </ProjectsContainer>
                    </Projects>
            </Psegment>
            <Psegment id="contact">
                    <Contact>
                        <h1>CONTACT</h1>
                        <p>desc</p>
                    </Contact>
            </Psegment>
        </PagesContainer>
        </>
    );
};