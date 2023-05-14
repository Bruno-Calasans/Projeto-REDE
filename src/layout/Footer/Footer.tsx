import { Gmail, Whatsapp } from '@styled-icons/boxicons-logos'
import { Container, MsgArea, ContactArea, RightsArea, UpperFooter, LowerFooter } from './Footer.style'

function Footer() {
  return (
    <Container>
      <UpperFooter>
        <MsgArea>
          <p>R.E.D.E</p>
        </MsgArea>
        <ContactArea id="contacts">
          <p>Contate-nos</p>
          <div>
            <a
              href="mailto:ong-rede@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <Gmail
                color="black"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://wa.me/55819123456789"
              target="_blank"
              rel="noreferrer"
            >
              <Whatsapp
                color="black"
                width={40}
                height={40}
              />
            </a>
          </div>
        </ContactArea>
      </UpperFooter>
      <LowerFooter>
        <RightsArea>
          <p> &copy; Todos os direitos reservados</p>
        </RightsArea>
      </LowerFooter>
    </Container>
  )
}

export default Footer
