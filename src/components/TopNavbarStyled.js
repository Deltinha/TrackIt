import styled from "styled-components";

const TopNavbar = styled.div`
    height: 70px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 18px;
    padding-right: 10px;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;

    & > .profile-picture {
        width: 51px;
        height: 51px;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export {TopNavbar};