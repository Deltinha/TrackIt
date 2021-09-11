import styled from "styled-components";

const NewHabit = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    height: 180px;
    box-sizing: border-box;
    padding: 18px 18px 0px 18px;
    position: relative;
    margin-bottom: 10px;
`;

const CancelAndSaveButtons = styled.div`
    position: absolute;
    right: 18px;
    bottom: 15px;

    & > .cancel-button {
        background-color: white;
        border: none;
        margin-right: 23px;
        font-size: 16px;
        color: #52b6ff;
        cursor: pointer;

    }
`;



export {NewHabit, CancelAndSaveButtons};