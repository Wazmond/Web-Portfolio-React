import styled from "styled-components"

export const About = styled.div`
    overflow: hidden;

    height: 100%;
    width: 100%;
    padding: 25px 7.5%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    scrollbar-gutter: stable;
`;

export const AboutTextContainer = styled.div`
    position: relative;

    margin-top: auto;
    word-wrap: break-word;
    margin-bottom: 5vh;

    font-size: 26px;
    @media only screen and (max-width:750px) {
        font-size: 3.5vw;
    }
    @media only screen and (min-width:775px) {
        width: 675px;
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
    align-self: center;
    overflow-y: scroll;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
`;

const TimelineContainer = styled.div`
    width: 100%;
    display: flex;
`;
const BoxDiv = styled.div`
    display: flex;
    flex-direction: row;
`;
const GuideLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
`;
const Dot = styled.div`
    border-radius: 50%;
    background-color: black;
    height: 10px;
    width: 10px;
`;
const Line = styled.div`
    background-color: black;
    height: 75%;
    width: 0px;
    border: 2px solid black;
    border-radius: 25%;
    margin-top: 5px;
`;
const TextContainer = styled.div`
    font-family: kanit;
    width: 100%;
`;
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 500px) {
        font-size: 2vw;
    }
    font-size: 14px;
`;
const Date = styled.h1`
    width: 25vw;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
`;
const Title = styled.h1`

`;
const DescContainer = styled.div`
    margin-top: 10px;
    padding: 0 10px;
`;
const Desc = styled.p``;

export default function AboutTimeLine({date, title, desc}) {
    return(
    <TimelineContainer>
        <BoxDiv>
            <GuideLine>            
                <Dot/>
                <Line/>
            </GuideLine>
            <TextContainer>
                <TitleContainer>
                    <Date>{date}</Date>
                    <Title>{title}</Title>
                </TitleContainer>
                <DescContainer>
                    <Desc>{desc}</Desc>
                </DescContainer>
            </TextContainer>
        </BoxDiv>
    </TimelineContainer>
    );
};