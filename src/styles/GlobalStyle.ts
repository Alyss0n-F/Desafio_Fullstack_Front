import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-blue-900: #0d47a1;

        font-size: 60%;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html {
        width: 100vw;
        height: 100vh;
    }

    body {
        background: #161616;
        color: gray;
        -webkit-font-smoothing: antialiased;

        overflow-x: hidden;
    }

    body, input, button, textarea {
        font-family: 'Inter';
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`