import styled from "styled-components";

export const Pokemon = styled.div`
    background-color: #CCE5FF;
    display: flex;
    flex-direction: column;
    margin: 5%;
    h3{
        margin-left: 35%;
        margin-top: 5%;
    }
    img {
        width: 100%;
    }
`

export const Botoes = styled.section`
    display: flex;
    flex-direction: row;
    button {
        width: 100%;
        background-color: white;
        border: none;
        border-radius: 5px;
        margin: 1%;

    }
    button:hover{
        background-color: #FF9933;
        border: none;
        font-size: 15px;
        color: white;
        border-radius: 10px;
        transition: 0.2s;
    }
`

