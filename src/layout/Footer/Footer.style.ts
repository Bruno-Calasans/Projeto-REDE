import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightcoral;
  padding: 10px;
  height: 200px;
  background-color: var(--primaryColor);
`

export const MsgArea = styled.div`
  & p {
    font-weight: bold;
    font-size: 1.5em;
  }
`

export const UpperFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  height: 100%;
`

export const ContactArea = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    font-weight: bold;
  }

  & div {
    display: flex;
    justify-content: space-between;
  }
`

export const LowerFooter = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  border-top: 5px solid black;
  padding: 20px;
`

export const RightsArea = styled.div`
  font-style: italic;
  font-size: 1.2em;
`
