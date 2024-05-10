import styled from "styled-components"

export const HomePage = styled.div`
    display: flex;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
`;
export const HomeTextContainer = styled.div`
    @media only screen and (min-width: 550px) {
        margin-top: 55px;
        margin: 55px 0 0 50px;
    }

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