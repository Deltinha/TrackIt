import styled from "styled-components";

const SectionHeader = styled.div`
    padding-top: 28px;
    padding-bottom: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > h1 {
        font-size: 23px;
        color: #126BA5;
    }

    & > span {
        font-size: 18px;
        color: #BABABA;
    }
`;

export {SectionHeader, TextContainer};