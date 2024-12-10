import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        height: 100vh;
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
    }

    body, button, input, textarea {
        font-family: "Nunito", sans-serif;
    }

    a {
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover , a:hover {
        filter: brightness(0.9);
    }
`