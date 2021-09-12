import styled from "styled-components";


export const Habit = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 5px;
    padding: 13px;
    margin-bottom: 10px;

    & .habit-info{
        display: flex;
        flex-direction: column;
    }

    & .habit-info .habit-name {
        font-size: 20px;
        margin-bottom: 7px;
    }

    & .habit-info .current-streak,
    & .habit-info .record-streak {
        font-size: 13px;
    }

    & > .checkbox {
        
    }
`;

export const Checkbox = styled.div`
        min-width: 69px;
        height: 69px;
        box-sizing: border-box;
        border-radius: 5px;
        position: relative;
        background-color: ${({concluded})=>concluded ? '#8FC549' : '#ebebeb'};
        cursor: ${({concluded})=>concluded ? 'default' : 'pointer'};;

        svg {
            color: white;
            font-size: 50px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
`;