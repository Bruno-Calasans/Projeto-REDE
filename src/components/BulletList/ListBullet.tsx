import { Container, Bullet } from './ListBullet.style'

interface ListBulletProps {
  bulletText: string
  children: React.ReactNode
}

function ListBullet({ bulletText, children }: ListBulletProps) {
  return (
    <Container>
      <Bullet>{bulletText}</Bullet>
      {children}
    </Container>
  )
}

export default ListBullet
