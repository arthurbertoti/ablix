import {createGlobalStyle} from "styled-components";

 export const GlobalStyle = createGlobalStyle`
    :root{
        --text: white;
    }
    body{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
        height: 100vh;
        width: 100vw;
        flex-direction: column;
    }
    #root{
        margin:0 auto;
    }
`
 export default GlobalStyle;