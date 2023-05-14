/* eslint-disable react-hooks/exhaustive-deps */
import { Container, TeamArea } from './Main.style'
import Hightlight from '../../components/Hightlight/Hightlight'
import PageArticle from '../../components/PageArticle/PageArticle'
import ListBullet from '../../components/BulletList/ListBullet'
import Quote from '../../components/Quote/Quote'
import Reveal from '../../components/Animations/Reveal/Reveal'
import TeamMember from '../../components/TeamMember/TeamMember'

function Main() {
  return (
    <Container>
      <Reveal>
        <PageArticle
          id="article1"
          title="Qual o nosso objetivo?"
        >
          <p>
            Visando identificar agentes transformadores e formadores da cultura brasileira, a partir de um conhecimento
            de nossas origens e diversidades culturais encontradas no Brasil, a ONG REDE vem com o objetivo de
            apresentar aos jovens do ensino fundamental e médio sobre a cultura indígena e africana, focando no respeito
            à diversidade presente no país.
          </p>
          <p>
            Com o projeto <Hightlight>“Conhecendo para Respeitar”</Hightlight>, torna-se possível uma maior
            sensibilização dos estudantes acerca dos temas abordados durante as oficinas, passando assim, a conhecer sua
            origem, heranças culturais e desenvolver um maior esclarecimento de sua história.
          </p>
        </PageArticle>
      </Reveal>

      <Reveal>
        <PageArticle
          id="article2"
          title="Como pretendemos atingí-lo?"
        >
          <p>
            O projeto será dividido em <Hightlight color="black">dois momentos</Hightlight>:
          </p>
          <ol>
            <ListBullet bulletText="1">
              Direcionado aos alunos do ensino fundamental, através do desenvolvimento de oficinas como: atividades
              <Hightlight color="black"> lúdicas</Hightlight>,
              <Hightlight color="black"> sensoriais (instrumentos, músicas)</Hightlight> e{' '}
              <Hightlight color="black">experiências culinárias</Hightlight>, abordando em cada tema proposto um pouco
              da história desses indivíduos, fomentando o respeito da comunidade jovem frente a esses povos.
            </ListBullet>

            <ListBullet bulletText="2">
              O segundo momento, com os jovens do ensino médio, que, acompanhando e registrando as atividades das
              oficinas através de fotos, entrevistas com os alunos e voluntários, irão desenvolver um site com o auxílio
              de nossos colaboradores utilizando a linguagem de marcação{' '}
              <Hightlight color="black">
                <abbr title="HyperText Markup Language">HTML</abbr>
              </Hightlight>{' '}
              e{' '}
              <Hightlight color="black">
                <abbr title="Cascading Style Sheets">CSS</abbr>
              </Hightlight>
              .
            </ListBullet>
          </ol>
        </PageArticle>
      </Reveal>

      <Reveal>
        <PageArticle
          id="article3"
          title="Concluindo..."
        >
          <p>
            Desse modo, buscamos integrar e expandir o conhecimento no viés que se refere à pluralidade e disseminação
            de conhecimento ético e cultural, utilizando assim, a vivência social e a tecnologia.
          </p>
        </PageArticle>
      </Reveal>

      <Reveal>
        <Quote author="Audre Lorde">
          Não são as nossas diferenças que nos dividem. É a nossa incapacidade de reconhecer , aceitar e celebrar essas
          diferenças.
        </Quote>
      </Reveal>

      <Reveal>
        <PageArticle
          title="Conheça nossa equipe"
          id="team"
        >
          <TeamArea>
            <TeamMember
              url="./imgs/avatar.png"
              desc="Fundadora"
            />
            <TeamMember
              url="./imgs/avatar.png"
              desc="Participante"
            />
            <TeamMember
              url="./imgs/avatar.png"
              desc="Participante"
            />
            <TeamMember
              url="./imgs/avatar.png"
              desc="Participante"
            />
          </TeamArea>
        </PageArticle>
      </Reveal>
    </Container>
  )
}

export default Main
