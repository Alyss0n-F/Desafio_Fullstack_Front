import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #0a0a0a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    h2 {
        background-color: #d5d5d5;
        padding-left: 4.5vw;
        padding-top: 6.5vh;
        width: 25vw;
        height: 10vh;
        color: #0a0a0a;
        border-radius: 5px 5px 0px 0px;
        font-size: 30px;
        font-weight: 600;
    }
`

export const Form = styled.form`
    background-color: #d5d5d5;
    width: 25vw;
    height: 45vh;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: black;
    gap: 40px;
    border-radius: 0px 0px 5px 5px;

    input, button, a {
        padding: 15px;
        border-radius: 5px;
        border: none;
        width: 16vw;
        transition: 0.4s;
    }

    input:hover {
        box-shadow: 0px 0px 10px 1px grey;
    }

    input:focus {
        box-shadow: 0px 0px 10px 1px grey;
    }
`

export const Labels = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
        align-self: flex-start;
        margin: 15px 0px 15px 0px;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    margin-bottom: 3vh;

    button {
        font-size: 20px;
        background-color: #4b6dcc;
        color: white;
    }

    a:hover {
        box-shadow: 0px 0px 10px 1px grey;
        background-color: #0a0a0a;
    }

    button:hover {
        box-shadow: 0px 0px 10px 1px grey;
        background-color: #002eaf;
    }

    a {
        color: white;
        background-color: #424242;
        text-align: center;
        text-decoration: none;
    }
`