import styled from "styled-components";

export const BottomNavigation = styled.div`
    background-color: white;
    height: 70px;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    z-index: 2;
    left: 0;
    bottom: 0;
    padding-left: 31px;
    padding-right: 31px;

    & > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    }

    & a {
        color: #52B6FF;
        font-size: 18px;
        cursor: pointer;
        text-decoration: none;
    }
`;
export const ProgressBarContainer = styled.div`
    width: 91px;
    height: 91px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    cursor: pointer;
`;