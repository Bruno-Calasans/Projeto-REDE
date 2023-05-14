import styled from 'styled-components'

interface HightlightProps {
  color?: string
  bold?: boolean
}

const Hightlight = styled.span<HightlightProps>`
  color: ${(props) => props.color ?? 'var(--secondaryColor)'};
  font-weight: bolder;
  /* text-decoration: underline; */
`
export default Hightlight
