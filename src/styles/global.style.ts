/* eslint-disable import/no-extraneous-dependencies */
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    :root {
       --primaryColor: #f8b323;
       --secondaryColor: #2A1A00;
       --defaultFontFamily: 'Open Sans', sans-serif;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--defaultFontFamily);
        font-weight: 500;
    }

    body {
        /* background-color: lightblue; */
        
    }

    a {
        text-decoration: none;
    }

    #root {
        display: grid;
        grid-template-rows: auto 1fr auto;
        height: 100vh;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .scale {
        opacity: 0.9;
        transition: 0.5s;
        cursor: pointer;

        &:hover {
            opacity: 1;
            scale: 1.02;
        }
    }

    .hidden {
        display: none;
    }

`

export default GlobalStyle
