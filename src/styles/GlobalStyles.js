import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1rem;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  h2 {
    color: inherit;
  }

  button, a {
    all: unset;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: blue;
    }
  }

  p {
    text-align: justify;
  }

  img {
    max-width: 100%;
    border-radius: 4px;
  }

  hr {
    margin: 1.5rem 0;
  }
`
