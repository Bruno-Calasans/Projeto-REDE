/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.main`
  background-color: var(--primaryColor);
  height: 200vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-image: url('./imgs/image-hero.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  background-size: cover;
`
