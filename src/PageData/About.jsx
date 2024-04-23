import styled from "styled-components"

export const About = styled.div`
    height: 100vh;
    width: 100%;
    padding: 50px 0 50px;
`;

export const AboutTextContainer = styled.div`
    position: relative;
    display: block;
    left: 65%;
    transform: translateX(-50%);
    h1 {
        font-family: kanit;
        letter-spacing: 4px;
        text-align: center;
        font-weight: bold;
        color: #0a0035;
    }

    p {
        font-family: kanit;
        letter-spacing: 1px;
        text-align: center;
        color: #0a0035;
    }
`;

export const AboutTimeLineContainer = styled.div`
    display: block;
    border: 2px solid #0a0035;
    margin: 0 auto;
    position: relative;
    top: 35vh;
    height: 50vh;
    width: 85%;
    transform: translateY(-50%);
`;