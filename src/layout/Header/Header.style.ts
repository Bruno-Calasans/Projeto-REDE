/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #f8b323;
  height: 60vh;
  padding: 10px;

  /* Header background image */
  background-image: url('./imgs/image-hero.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  background-size: cover;
`

export const UpperHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--secondaryColor);
`

export const Logo = styled.div`
  display: flex;

  & img {
    display: block;
    height: 100px;
  }
`

export const NavArea = styled.nav`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 5px;
`

export const LowerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  font-weight: bold;
  font-size: 2rem;

  color: white;
  text-shadow: 3px 3px black;

  h1 {
    background-image: linear-gradient(to right, var(--primaryColor), #f8b52300);
  }

  & span {
    color: red;
  }
`

export const AbvArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: white;
  text-shadow: 3px 3px black;
  font-size: 2.5rem;
  line-height: 1.5em;
  gap: 2px;

  & p {
    background-image: linear-gradient(to right, #f54040, #ff000000);
  }

  & p span {
    color: red;
  }
`
