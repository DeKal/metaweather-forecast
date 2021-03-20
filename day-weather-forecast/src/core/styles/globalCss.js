import { createGlobalStyle } from 'styled-components'

// GlobalStyle contains base styles, resets
const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
    }

    html,
    body {
        height: 100%;
        width: 100%;
    }

    body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    #root {
        min-height: 100%;
        min-width: 100%;
    }


    input, select {
        font-family: inherit;
        font-size: inherit;
    }
`

export default GlobalStyle
