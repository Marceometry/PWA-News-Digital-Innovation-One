import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 32px 64px;
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
`
