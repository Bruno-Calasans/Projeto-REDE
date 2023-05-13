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
            url="#about"
            text="Sobre"
          />
          <LinkButton
            url="#team"
            text="Equipe"
          />
          <LinkButton
            url="#contacts"
            text="Contato"
          />
        </NavArea>
      </UpperHeader>
      <LowerHeader>
        <Title>
          <h1>Projeto R.E.D.E</h1>
        </Title>
        <AbvArea>
          <p
            style={{
              backgroundImage: 'linear-gradient(to right, #f54040, #ff000000)',
            }}
          >
            <span style={{ color: 'red' }}>R</span>
            ede de
          </p>
          <p
            style={{
              backgroundImage: 'linear-gradient(to right, #f54040, #ff000000',
            }}
          >
            <span style={{ color: 'red' }}>E</span>ducação sobre
          </p>
          <p
            style={{
              backgroundImage: 'linear-gradient(to right, #f54040, #ff000000)',
            }}
          >
            <span style={{ color: 'red' }}>D</span>iversidadde
          </p>
          <p
            style={{
              backgroundImage: 'linear-gradient(to right, #f54040, #ff000000)',
            }}
          >
            <span style={{ color: 'red' }}>É</span>tnica
          </p>
        </AbvArea>
      </LowerHeader>
    </Container>
  )
}

export default Header
