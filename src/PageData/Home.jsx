import styled from "styled-components"

export const HomePage = styled.div`
    display: flex;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;

    padding: 15px;

`;
export const HomeTextContainer = styled.div`
    h1.name {
        letter-spacing: 4px;
    }
    font-size: 3vw;

    @media only screen and (min-width: 550px) {
        margin-top: 55px;
        margin: 55px 0 0 50px;
    }
    @media only screen and (min-width: 1200px) {
        font-size: 36px;
    }
    @media only screen and (max-width: 549px) {
        display: flex;
        flex-direction: column;
        font-size: 4vw;
    }
    color: #0a0035;
    font-family: kanit;
`;