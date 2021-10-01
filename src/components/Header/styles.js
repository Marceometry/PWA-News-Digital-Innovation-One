import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 2rem 4rem;
  background: ${({ theme }) => theme.secondaryBackground};
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 160px;
    height: 112px;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem;

    img {
      width: 80px;
      height: 66px;
    }
  }
`
