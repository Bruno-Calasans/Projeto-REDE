import styled from 'styled-components'

export const Container = styled.li`
  position: relative;
`

export const Bullet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  color: white;

  position: absolute;
  left: calc(0% - 25px);
  top: calc(50% - 25px);
`
