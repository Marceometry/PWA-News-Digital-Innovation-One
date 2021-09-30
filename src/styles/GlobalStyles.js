import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font: 400 1rem sans-serif;
  }

  button, a {
    all: unset;
    cursor: pointer;
    transition: color 0.2s;
  }

  p {
    text-align: justify;
  }

  hr {
    margin: 24px 0;
  }
`
