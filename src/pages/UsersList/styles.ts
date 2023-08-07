import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #d5d5d5;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    
    header {
        height: 10vh;
        width: 70vw;
        margin-bottom: 6vh;

        display: flex;
        justify-content: space-between;

        padding: 20px 0px 20px 0px;

        h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #8e8e8e;
            font-size: 40px;
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;

            button, a {
                background-color: #8e8e8e;
                color: white;

                height: 10px;
                padding: 30px;

                text-decoration: none;
                text-align: center;
                
                display: flex;
                justify-content: center;
                align-items: center;

                border: none;
                border-radius: 10px;

                transition: 0.3s;
                font-size: 18px;
            }

            button:hover {
                background-color: #002eaf;
                box-shadow: 0px 0px 10px 1px grey;
            }

            a:hover {
                background-color: #002eaf;
                box-shadow: 0px 0px 10px 1px grey;
            }

            #logout_button:hover {
                background-color: #0a0a0a;
            }
        }
    }

    #add_button {
        border-radius: 10px;
        border: none;
        transition: 0.3s;

        margin: 20px 0px 20px 0px;
        padding: 20px;

        background-color: #8e8e8e;
        color: white;
    }

    #add_button:hover {
        background-color: #002eaf;
        box-shadow: 0px 0px 10px 1px grey;
    }
    `

export const Board = styled.ul`
    background-color: #8e8e8e;
    min-height: 30vh;
    width: 70vw;
    height: 50vh;
    padding: 10px;
    box-shadow: 0px 0px 50px 1px grey;

    display: flex;
    flex-direction: column;

    border-radius: 10px;

    li {
        background-color: white;
        border-radius: 10px;
        border: none;
        list-style: none;
        cursor: pointer;
        transition: 0.3s;
    }

    li:hover {
        background-color: #002eaf;
        color: white;
    }
`