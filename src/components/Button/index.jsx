import styled from 'styled-components'

const StyledButton = styled.button`
  transition: all 0.2s;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;

  border: 1px solid ${({ theme }) => theme.oppositeBackground};
  color: ${({ theme, outlined }) =>
    outlined ? theme.fontColor : theme.primaryBackground};
  background-color: ${({ theme, outlined }) =>
    outlined ? 'none' : theme.oppositeBackground};

  &:hover {
    border: 1px solid ${({ theme }) => theme.oppositeBackground};
    color: ${({ theme, outlined }) =>
      !outlined ? theme.fontColor : theme.primaryBackground};
    background-color: ${({ theme, outlined }) =>
      !outlined ? theme.secondaryBackground : theme.oppositeBackground};
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`

export function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>
}
