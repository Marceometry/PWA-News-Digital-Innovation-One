import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;

  main {
    padding: 2rem 3rem;
  }

  @media screen and (max-width: 768px) {
    main {
      padding: 2rem 1.5rem;
    }
  }
`
