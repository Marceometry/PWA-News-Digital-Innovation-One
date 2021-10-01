import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1rem;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.primaryBackground};
  }

  h1 {
    margin-bottom: 1.5rem;
    color: inherit;
  }

  h2 {
    color: inherit;
  }

  button, a {
    all: unset;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
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
    margin: 2.5rem 0 1.5rem;
  }
`
