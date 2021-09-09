import styled from "styled-components";

const TextInput = styled.input`
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    border-radius: 5px;
    padding-left: 11px;
    padding-right: 11px;
    font-size: 20px;
    margin-bottom: 6px;

    &:focus {
        outline: 1px solid #126BA5;
    }

    &::placeholder{
        color: #DBDBDB;
    }
`;

export {TextInput};