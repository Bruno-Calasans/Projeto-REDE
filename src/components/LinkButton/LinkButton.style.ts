import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid white;
  transition: 0.3s;
  font-size: 1.2em;
  opacity: 0.9;
  transition: 0.3;

  &:hover {
    opacity: 1;
    border: 1px solid var(--primaryColor);
  }

  &:hover a {
    color: var(--primaryColor);
  }
`

export const Link = styled.a`
  display: block;
  color: white;
  text-shadow: 2px 2px black;
  font-weight: bold;
  padding: 8px;
`
