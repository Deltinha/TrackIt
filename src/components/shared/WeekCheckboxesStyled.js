import styled from "styled-components";

export const WeekCheckboxes = styled.div`
    margin-top: 2px;
    display: flex;
    gap: 4px;
`;

export const DayCheckbox = styled.div`
    position: relative;
    width: 30px;
    height: 30px;

    input {
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        box-sizing: border-box;
        opacity: 0;
        cursor: pointer;
    }
    
    input ~ div {
        transition: 0.5s ease;
        width: 100%;
        height: 100%;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        
        color: #dbdbdb;
    }

    input:checked ~ div {
        background-color: #CFCFCF;
        color: white;
    }

    input:disabled {
        cursor: default;
    }
    
`;