/* eslint-disable react/require-default-props */
import { Container, Title, Content } from './PageArticle.style'

interface PageArticleProps {
  id?: string
  title: string
  children: React.ReactNode
}

function PageArticle({ id, title, children }: PageArticleProps) {
  return (
    <Container id={id}>
      <Title>
        <h1>{title}</h1>
      </Title>
      <Content>{children}</Content>
    </Container>
  )
}

export default PageArticle
