import styled from "styled-components";


export const Habit = styled.div`
    background-color: white;
    border-radius: 5px;
    position: relative;
    padding: 13px 15px 15px 15px;
    margin-bottom: 10px;

    & > svg {
        position: absolute;
        right: 10px;
        top: 11px;
        cursor: pointer;
        font-size: 15px;
        color: #666666;
    }

    & > span {
        color: #666666;
        font-size: 20px;
        display: inline-block;
        margin-bottom: 6px;
        
    }
`;

export const Week = styled.ul`
    display: flex;
`;

export const Day = styled.li`
    width: 30px;
    height: 30px;
`;