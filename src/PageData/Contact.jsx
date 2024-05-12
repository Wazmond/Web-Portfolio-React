import styled from "styled-components"

export const Contact = styled.div`
    font-family: kanit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    scrollbar-gutter: stable;
    height: calc(100vh - 55px);
    text-align: center;
    h1 {
        font-size: 28px;
        color: #0a0035;
        letter-spacing: 4px;
        font-weight: bold;
    }
`;

export const ContactLogoContainer = styled.div`
    display: flex;
    flex-direction: Column;
    align-items: center;
`;

export const ContactBlocks = styled.a`
    display: flex;
    align-items: center;

    box-shadow: rgba(4, 0, 59, 0.45) 0px 5px 15px;
    border-radius: 25px;

    width: 290px;

    padding: 10px 15px 10px 10px;
    margin: 10px 0;

    transition: all 50ms ease-out;
    &:Hover {
        width: 350px;
        box-shadow: rgba(4, 0, 59, 0.9) 0px 5px 15px;
    }

    background-color: #eaeaff;
    color: #0a0035;
    text-decoration: none;
`;

export const ContactLogo = styled.img`
    margin: 0 10px;
    height: 50px;
    width: 50px;
`;
export const ContactLogoDesc = styled.a`
    margin: 0 0 0 auto;
    font-size: 18px;
    letter-spacing: 0.5px;
`;