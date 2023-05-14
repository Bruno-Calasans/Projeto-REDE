import { Container, QuoteArea, AuthorArea } from './Quote.style'

interface QuoteProps {
  children: string
  author: string
}

function Quote({ children, author }: QuoteProps) {
  return (
    <Container>
      <QuoteArea>{children}</QuoteArea>
      <AuthorArea>~{author}</AuthorArea>
    </Container>
  )
}

export default Quote
