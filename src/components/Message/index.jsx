import styled from 'styled-components'

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`

export function Message({ children = 'Carregando...' }) {
  return (
    <MessageContainer>
      <h1>{children}</h1>
    </MessageContainer>
  )
}
