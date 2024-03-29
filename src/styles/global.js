import { createGlobalStyle } from "styled-components";
const primaryColor = "#FF8133";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        overflow-y: scroll;
        scroll-behavior: smooth;
    }

    body {
        background: ${(props) => props.theme.colors.background_body};
        color: ${(props) => props.theme.colors.text};;
        font-family: 'Roboto', sans-serif;
        padding-bottom: 100px;
    }

    li {
        list-style: none;
    }

    h1 {
        text-align: center;
        margin: 1.5rem 0;
        color: ${primaryColor};
    }

    h2 {
        text-align: center;
        margin: 1rem 0;
        color: ${primaryColor};
    }
`;
