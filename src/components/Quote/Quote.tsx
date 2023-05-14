import { Container, Content, QuoteArea, AuthorArea } from './Quote.style'

interface QuoteProps {
  children: string
  author: string
}

function Quote({ children, author }: QuoteProps) {
  return (
    <Container>
      <Content>
        <QuoteArea>{children}</QuoteArea>
        <AuthorArea>~{author}</AuthorArea>
      </Content>
    </Container>
  )
}

export default Quote
