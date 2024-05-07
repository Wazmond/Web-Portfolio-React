import styled from "styled-components"

export const About = styled.div`
    overflow:hidden;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    scrollbar-gutter: stable;
`;

export const AboutTextContainer = styled.div`
    position: relative;

    margin: 5% 7.5% 5%;
    word-wrap: break-word;

    @media only screen and (min-width:590px) {
        width: 500px;
    }

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
    border: 2px solid #0a0035;
    position: relative;
    align-self: center;

    height: 50vh;
    width: 85vw;
    flex-wrap: wrap;
`;