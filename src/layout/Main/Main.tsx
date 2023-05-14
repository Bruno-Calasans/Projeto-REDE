import { Container } from './Main.style'
import Hightlight from '../../components/Hightlight/Hightlight'
import PageArticle from '../../components/PageArticle/PageArticle'

function Main() {
  return (
    <Container>
      <PageArticle
        id="artigo1"
        title="Qual o nosso objetivo?"
      >
        <p>
          Visando identificar agentes transformadores e formadores da cultura brasileira, a partir de um conhecimento de
          nossas origens e diversidades culturais encontradas no Brasil, a ONG REDE vem com o objetivo de apresentar aos
          jovens do ensino fundamental e médio sobre a cultura indígena e africana, focando no respeito à diversidade
          presente no país.
        </p>
        <p>
          Com o projeto <Hightlight>“Conhecendo para Respeitar”</Hightlight>, torna-se possível uma maior sensibilização
          dos estudantes acerca dos temas abordados durante as oficinas, passando assim, a conhecer sua origem, heranças
          culturais e desenvolver um maior esclarecimento de sua história.
        </p>
      </PageArticle>

      <PageArticle
        id="article2"
        title="Como pretendemos atingí-lo?"
      >
        {' '}
        <p>
          O projeto será dividido em dois momentos: o primeiro; direcionado aos alunos do ensino fundamental, através do
          desenvolvimento de oficinas como: atividades lúdicas, sensoriais (instrumentos, músicas) e experiências
          culinárias, abordando em cada tema proposto um pouco da história desses indivíduos, fomentando o respeito da
          comunidade jovem frente a esses povos.
        </p>
        <p>
          O segundo momento, com os jovens do ensino médio, que, acompanhando e registrando as atividades das oficinas
          através de fotos, entrevistas com os alunos e voluntários, irão desenvolver um site com o auxílio de nossos
          colaboradores utilizando a linguagem de marcação <abbr title="Hyper Text Marking Language">HTML</abbr> e{' '}
          <abbr title="Cascading Styling Sheet">CSS</abbr>.
        </p>
      </PageArticle>

      <PageArticle
        id="article3"
        title="Concluindo..."
      >
        <p>
          Desse modo, buscamos integrar e expandir o conhecimento no viés que se refere à pluralidade e disseminação de
          conhecimento ético e cultural, utilizando assim, a vivência social e a tecnologia.
        </p>
      </PageArticle>
    </Container>
  )
}

export default Main
