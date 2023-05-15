/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.main`
  background-color: var(--primaryColor);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 300vh;

  #article1 article,
  #article3 article {
    border-left: 2px solid black;
  }

  #article2 {
    background-color: #7a3d00;
    padding: 20px;
    color: white;
    & header h1 {
      background-image: none;
    }
  }

  #team {
    background-color: #7a3d00;
    color: white;
    padding: 20px;

    h1 {
      background-image: none;
    }
  }

  #about article {
    border-left: 2px solid black;
  }

  & section {
    background-color: transparent;
    box-shadow: none;

    & ol {
      list-style: none;

      & li {
        font-family: 'Times New Roman', Times, serif;
        padding: 15px;
        padding-left: 40px;
        margin-bottom: 10px;
        font-size: 1.4em;
      }
    }
  }

  /* background-image: url('./imgs/image-hero.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  background-size: cover; */
`

export const AboutArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & img {
    max-width: 300px;
  }
`

export const TeamArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
`
