import styled from "styled-components";
import { HomePage, HomeTextContainer} from "./PageData/Home"
import AboutTimeLine, { About, AboutTextContainer, AboutTimeLineContainer } from "./PageData/About"
import { Projects, 
    ProjectsContainer, 
    ProjectsCard, 
    ProjectsTitle } from "./PageData/Projects"
import { Contact,
    ContactLogoContainer,
    ContactLogo,
    ContactBlocks,
    ContactLogoDesc } from "./PageData/Contact"
import GitLogo from "/src/Logos/Github-Logo.png"
import EmailLogo from "/src/Logos/Email-Logo.png"
import PhoneLogo from "/src/Logos/Phone-Logo.png"
import LinkedInLogo from "/src/Logos/LinkedIn-Logo.png"
import InstagramLogo from "/src/Logos/Instagram-Logo.png"

const PagesContainer = styled.div`
    background-color: #dcdcfa;
    width: 100vw;
    `;
const Psegment = styled.div`
    width: 100vw;

    &#home {
        height: 100vh;
    }
    &#about, &#contact, &#projects {
        height: calc(100vh - 55px);
        scroll-margin-top: 55px;
    }
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
    simple line going downs
Make a button that brings you to the very top of the screens
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
                        <p className="greeting">Hi I'm</p>
                        <h1 className="name">Ryuichi Nakamura</h1>
                        <p className="description">I'm an aspiring developer based in Sydney.</p>
                    </HomeTextContainer>
                </HomePage>
            </Psegment>
            {/* <Guideline /> */}
            <Psegment  id="about">
                    <About>
                        <AboutTextContainer>
                            <h1>ABOUT</h1>
                            <p>Self taught <Age />y.o aspiring developer on a journey
                            to learn more about the world of programming and technology.
                            Having developing knowledge in react, javascript, html/css, and C,
                            I'm passionate about crafting innovative solutions and completing challenges.
                            But really, I just want to make cool stuff...
                            So let's connect and building something awesome. </p>
                        </AboutTextContainer>
                        <AboutTimeLineContainer>
                            {/* <AboutTimeLine date="25/10/2001" title="Ryuichi was born" desc="Born in Tokyo, Japan." className="ATL-fade-top"/> */}
                            {/* <AboutTimeLine date="~ 2004" title="Immigrated to Australia" desc="Immigrated to Sydney, Australia around the age of 3"/>
                            <AboutTimeLine date="~ 2006" title="Pre school" desc="Pre school in Lane Cove, Sydney. Not much else to say about that... I'm not even sure how long I was there either..."/> */}
                            {/* <AboutTimeLine date="2007 - 2013" title="Primary School" desc="Spent my first half of prime growing years at Truscott Street Public School. It was during this period, where I got my first computer, though time was mostly spent playing video games."/> */}
                            {/* <AboutTimeLine date="2014 - 2019" title="High School" desc="Ryde Secondary College, learning more about the reality of life. Learnt a lot more about computers and even tried learning to code, more for the fun of it. Inspect element and changing details on websites was fun though. Built my first proper PC, and learnt a lot about PC hardware."/>
                            <AboutTimeLine date="Oct 2019" title="Moving to Japan" desc="I moved to Japan in October as I had a job lined up in a Ski Resort. Between this time and Dec 2019, I worked/helped at my uncles bar for a bit, and also at a local medical center, developing my Japanese further."/> */}
                            <AboutTimeLine date="Dec 2019" title="Tour Attendant @ Hakuba Sanroku Tours" desc="My first ever proper job, a tour attendant for Hakuba Sanroku Tours, and a receptionist at Hakuba Happo ski resort. During this time, I was developing my customer service, work ethic, and interpersonal skills. This job was seasonal and ended in March 2020."/>
                            <AboutTimeLine date="~ 2020" title="Kitchen Hand @ a Sushi Train in Yokohama" desc="Briefly worked as a kitchen hand at a Sushi Train in Yokohama. It was during this time where I briefly tried learning C#."/>
                            <AboutTimeLine date="~ 2021" title="Traffic Director job @ Bread Box in Yokohama" desc="Part time job as a traffic director for Bread Box. "/>
                            {/* <AboutTimeLine date="May 2021" title="Moved back to Australia" desc="Decided it was time for me to move back to Australia with my new learnt skills."/> */}
                            <AboutTimeLine date="Oct 2021" title="Floor Staff/Bar Attendant @ Alex & co" desc="Worked as a floor staff, moving my way up to a Bar attendant at Alex & Co in Parramatta. Improving my customer service & interpersonal skills."/>
                            <AboutTimeLine date="May 2022" title="Bar Attendant @ The Commercial Hotel" desc="Worked as bar attendant at The Commercial Hotel in Parramatta, learning about the gaming industry."/>
                            <AboutTimeLine date="Oct 2022" title="Controlroom Operator @ Security Data Systems" desc="As a controlroom operator at Security and Data Systems, I was responsible for maintaining data records, and integrity of security systems. Monitoring a range of tasks, including any alarms or irregularities, as well as handling inbound & outbound calls in a professional and courteous manner, was a key aspect of my role. 
                            During this time, I started learning C in CS50, a course developed by Harvard Univerity as well as html and css via online websites. I also learnt to write some google app script code for some functions."/>
                        </AboutTimeLineContainer>
                        {/* Could make a time line, interactive. it can be from a button or from mouse movement? left back to the past and right to the present. man can get bigger and smaller
                        this can make the use of an education  */}
                    </About>
            </Psegment>
            <Psegment id="projects">
                    <Projects>
                        <ProjectsTitle>PROJECTS</ProjectsTitle>
                        <ProjectsContainer>
                            <ProjectsCard />
                            <p>In progress...</p>
                        </ProjectsContainer>
                    </Projects>
            </Psegment>
            <Psegment id="contact">
                    <Contact>
                        <h1>CONTACT</h1>
                        <ContactLogoContainer>
                            <ContactBlocks className="GitHub" href="https://github.com/Wazmond" target="_blank">
                                <ContactLogo src={GitLogo} alt="GitHub"/>
                                <ContactLogoDesc>@WAZMOND</ContactLogoDesc>
                            </ ContactBlocks>
                            <ContactBlocks className="LinkedIn" href="https://www.linkedin.com/in/ryuichi-nakamura-37b942308/" target="_blank">
                                <ContactLogo src={LinkedInLogo} alt="LinkedIn"/>
                                <ContactLogoDesc>@RYUICHI NAKAMURA</ContactLogoDesc>
                            </ ContactBlocks>
                            <ContactBlocks className="Instagram" href="https://www.instagram.com/ry.oochi/" target="_blank">
                                <ContactLogo src={InstagramLogo} alt="Instagram"/>
                                <ContactLogoDesc>@RY.OOCHI</ContactLogoDesc>
                            </ ContactBlocks>
                            <ContactBlocks className="Phone" href="tel:+61 466 078 612">
                                <ContactLogo src={PhoneLogo} alt="Phone"/>
                                <ContactLogoDesc>+61 466 078 612</ContactLogoDesc>
                            </ ContactBlocks>
                            <ContactBlocks className="Email" href="mailto:rynak25@gmail.com?subject=I want to hire you!&body=Hello Ryuichi,%0D%0A%0AYour portfolio is so good, I want you to become our new hire.%0D%0A%0ARegards,%0D%0AHR of ...">
                                <ContactLogo src={EmailLogo} alt="Email"/>
                                <ContactLogoDesc>RYNAK25@GMAIL.COM</ContactLogoDesc>
                            </ ContactBlocks>
                        </ContactLogoContainer>
                    </Contact>
            </Psegment>
        </PagesContainer>
        </>
    );
};
