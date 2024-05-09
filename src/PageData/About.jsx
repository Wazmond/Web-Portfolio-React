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

    overflow-y: scroll;
    overflow-x: hidden;

`;

const TimelineContainer = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid black;
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
    border: 1px solid brown;
`;
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;

`;
const Date = styled.h1`
    width: 175px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
`;
const Title = styled.h1``;
const DescContainer = styled.div``;
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