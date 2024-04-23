import styled from "styled-components"

export const Contact = styled.div`
    font-family: kanit;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 24px;
        color: #0a0035;
        letter-spacing: 4px;
        font-weight: bold;
        text-align: center;
        position: relative;
        margin-top: 40%;
    }
`;

export const ContactLogoContainer = styled.div`
    display: flex;
    flex-direction: Column;
    border: 2px solid black;
    width: 270px;
`;

export const ContactBlocks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 10px 10px 0;
`;

export const ContactLogo = styled.img`
    margin: 0 10px;
    height: 50px;
    width: 50px;
`;
export const ContactLogoDesc = styled.p`
    margin: 0 auto;
    font-size: 18px;
    letter-spacing: 0.5px;
`;