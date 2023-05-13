import { Container, Link } from './LinkButton.style'

interface LinkButtonProps {
  url: string
  text: string
}

function LinkButton({ url, text }: LinkButtonProps) {
  return (
    <Container>
      <Link href={url}>{text}</Link>
    </Container>
  )
}

export default LinkButton
