import { createGlobalStyle } from "styled-components";

import { defaultTheme } from "../theme/index";

const theme = defaultTheme;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Oswald:wght@200;300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap');

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    body {
        font-family: 'Inter', sans-serif;
    }

    h1{
        font-family: 'Chakra Petch', sans-serif;
        font-size: ${theme.fontBase_h1};
        font-weight: 700;
    }

    h2{
        font-family: 'Chakra Petch', sans-serif;
        font-size: ${theme.fontBase_h2};
        font-weight: 500;
    }

    h3{
        font-weight: 500;
        font-family: 'Chakra Petch', sans-serif;
        font-size: ${theme.fontBase_h3};
    }

    p{
        font-family: 'Inter', sans-serif;
        font-size: ${theme.fontBase_p};
    }
     
`