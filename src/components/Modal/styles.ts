import { styled } from "styled-components";

export const Container = styled.div`
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        height: 70vh;
        width: 25vw;

        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);

        #exclude_button {
            background-color: #c96565;
        }

        #exclude_button:hover {
            background-color: red;
        }
        
        h2 {
            background-color: #d5d5d5;
            color: black;
            width: 100%;
            height: 10vh;
            padding-top: 25px;

            border-radius: 5px 5px 0px 0px;

            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        form {
            height: 100%;
            width: 100%;
            
            gap: 35px
        }
    }
`