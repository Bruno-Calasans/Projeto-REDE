import styled from 'styled-components'

export const Container = styled.div``

export const Avatar = styled.img`
  border-radius: 50%;
  max-height: 180px;
`

export const InfoArea = styled.div`
  padding: 5px;
  text-align: center;

  & p:nth-child(1) {
    font-size: 1.8em;
  }

  & p:nth-child(2) {
    font-size: 1.2em;
  }
`

export const NameField = styled.p`
  font-weight: bold;
  font-size: 3rem;
`

export const DescField = styled.p`
  font-size: 0.5em;
`
