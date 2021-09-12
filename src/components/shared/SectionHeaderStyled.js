import styled from "styled-components";

export const SectionHeader = styled.div`
    padding-top: 28px;
    padding-bottom: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SectionTitle = styled.h1`
    font-size: 23px;
    color: #126BA5;
`;

export const HabitsConcludedText = styled.span`
    font-size: 18px;
    color: ${({concludedPct})=> ((concludedPct > 0) ? '#8fc549' : '#bababa')};
`;

