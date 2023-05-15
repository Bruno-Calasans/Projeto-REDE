import { Container, UpperHeader, Title, Logo, NavArea, LowerHeader, AbvArea } from './Header.style'
import LinkButton from '../../components/LinkButton/LinkButton'

function Header() {
  return (
    <Container>
      <UpperHeader>
        <Logo>
          <a href="/">
            <img
              src="./imgs/rede-logo-transparent.png"
              alt="rede-logo"
            />
          </a>
        </Logo>
        <NavArea>
          <LinkButton
            url="#"
            text="Home"
          />
          <LinkButton
            url="#team"
            text="Equipe"
          />
          <LinkButton
            url="#about"
            text="Sobre"
          />
          <LinkButton
            url="#contacts"
            text="Contato"
          />
        </NavArea>
      </UpperHeader>
      <LowerHeader>
        <Title>
          <h1>
            ONG <span>R.E.D.E</span>
          </h1>
        </Title>
        <AbvArea>
          <p>
            <span>R</span>ede de
          </p>
          <p>
            <span>E</span>ducação sobre
          </p>
          <p>
            <span>D</span>iversidadde
          </p>
          <p>
            <span>É</span>tnica
          </p>
        </AbvArea>
      </LowerHeader>
    </Container>
  )
}

export default Header
