import styled from "styled-components";

const BlueButton = styled.button`
    background-color: #52b6ff;
    border-radius: 4.65px;
    border: none;
    color: white;
    font-weight: 400;
    padding: 0;

    opacity: ${({disabled}) => disabled ? '0.7' : '1'};

    cursor: ${({disabled}) => disabled ? 'default' : 'pointer'};

    width: ${({size}) => {
        if (size === 'large') {
            return '303px';
        }
        if (size === 'small') {
            return '40px';
        }
        return '84px';
    }};

    height: ${({size}) => size==='large' ? '45px' : '35px'};

    font-size: ${({size}) => {
        if (size === 'large') {
            return '20.98px';
        }
        if (size === 'small') {
            return '26.98px';
        }
        return '15.98px';
    }};
    

`;

export {BlueButton};