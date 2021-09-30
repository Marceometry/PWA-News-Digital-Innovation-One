import styled from 'styled-components'

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`

export function Loader() {
  return (
    <LoaderContainer>
      <h1>Carregando...</h1>
    </LoaderContainer>
  )
}
