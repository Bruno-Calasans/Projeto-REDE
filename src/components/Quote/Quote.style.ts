import styled from 'styled-components'

export const Container = styled.div`
  background-color: #7a5725;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #7a5725;
  font-size: 1.2em;
  color: white;
  padding: 20px;
  height: 150px;
  max-width: 70%;
  margin: auto;
`

export const QuoteArea = styled.q`
  text-align: center;
  font-style: italic;
`

export const AuthorArea = styled.p`
  text-align: right;
`
