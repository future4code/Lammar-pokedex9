import styled from "styled-components";

export const Cabecalho = styled.header`
    background-color: #0080FF;
    display: flex;
    justify-content: space-between;
    padding: 3vh;
    img{
        height: 5vh;
    }
    button {
        width: 9%;
        height: 5vh;
        background-color: white;
        border: none;
        border-radius: 5px;

    }
    button:hover{
        background-color: #FF9933;
        border: none;
        font-size: 14px;
        color: white;
        border-radius: 10px;
        transition: 0.2s;
    }
`




