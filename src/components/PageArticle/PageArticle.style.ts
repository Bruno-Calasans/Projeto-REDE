import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;

  background-color: beige;
  box-shadow: 1px 1px 15px black;
`

export const Title = styled.header`
  padding: 20px;

  & h1 {
    font-size: 2.5em;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-image: linear-gradient(to right, var(--primaryColor), #f8b52300);
  }
`

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 15px;
  text-align: justify;
  margin: auto;
  width: 70%;
  height: 100%;

  & p {
    font-size: 1.5em;
    font-family: 'Times New Roman', Times, serif;
  }
`
