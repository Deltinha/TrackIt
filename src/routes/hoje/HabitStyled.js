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

    & .habit-info__name {
        font-size: 20px;
        margin-bottom: 7px;
    }

    & .habit-info__current-sequence,
    & .habit-info__highest-sequence {
        font-size: 13px;
    }
`;

export const Checkbox = styled.div`
        min-width: 69px;
        height: 69px;
        position: relative;
        border-radius: 5px;
        
        /* background-color: ${({concluded})=>concluded ? '#8FC549' : '#ebebeb'};
        cursor: ${({concluded})=>concluded ? 'default' : 'pointer'}; */

        input {
            margin: 0;
            position: absolute;
            left: 0;
            top: 0;
            cursor: pointer;
            width: 69px;
            height: 69px;
            opacity: 0;
            
        }

        input ~ div {
            background-color: #ebebeb;
            width: 100%;
            height: 100%;
            transition: 0.5s ease;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        input:checked ~ div {
            background-color: #8fc549;
            display: flex;
        }



        svg {
            color: white;
            font-size: 50px;
        }
`;