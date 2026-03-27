import { Link } from 'react-router-dom'

function QuemSou() {
  return (
    <section className="page quem-sou">
      <h2>Quem sou</h2>

      <div className="about-intro">
        <img
          src="/foto-isabel.jpg"
          alt="Prof. Isabel Silva"
          className="about-photo"
        />
        <div className="about-intro-text">
          <p>
            O meu objetivo é tornar o processo de aprendizagem simples e eficaz para os meus alunos.
          </p>

          <p>
            Já tenho 6 anos de experiência a dar explicações de Matemática, e trabalho com crianças
            e jovens há 8 anos. Já tive também experiência a fazer mentoria num contexto escolar,
            analisando com cada aluno os seus objetivos pessoais e estabelecendo horários e rotinas
            que lhes permitam cumprir os seus objetivos. Trabalhamos também técnicas de estudo e de
            organização que lhes permitam serem independentes e orientados aos seus objetivos pessoais.
          </p>

          <p>
            Assim, a minha metodologia de ensino pretende criar alunos com fortes competências de
            organização e independência, que tenham plena noção das suas capacidades, pontos fortes
            e fracos, e façam bom uso dessas capacidades.
          </p>
        </div>
      </div>

      <h3>Como é uma explicação?</h3>

      <p>
        Geralmente, na explicação, começamos por tirar dúvidas que tenham surgido do trabalho de
        casa da explicação anterior. É expectável que haja sempre dúvidas, mas nunca muitas, ou seja,
        que o trabalho dado aos alunos seja desafiante mas possível de ser feito por eles sem muita frustração.
      </p>

      <p>
        No resto da explicação, vamos rever conceitos dados em aula, partir conceitos complicados em
        bocadinhos digeríveis e fazer exercícios de exemplo e exercícios complexos, se aplicável.
        Explorar as dúvidas que tenham surgido na aula que não tenham sido tiradas pelo professor.
        Os alunos levam de cada explicação uma série de exercícios de grau de dificuldade ajustado às
        suas capacidades para fazer em casa, sempre dentro dos conceitos que abordaram nas explicações
        anteriores, que lhes vai permitir cimentar o que estiveram a ver na explicação.
      </p>

      <p>
        Há então uma componente forte de trabalho individual por parte dos alunos, sempre orientado e
        guiado por mim, com acesso a todos os exercícios, testes de treino e recursos que possam precisar,
        e que são escolhidos a dedo para que eles desenvolvam cada aprendizagem da melhor forma antes de
        avançarem para a seguinte.
      </p>

      <p>
        Mantenho também um contacto próximo com os encarregados de educação para que tenham conhecimento
        do progresso dos alunos e não sejam apanhados de surpresa pelas notas.
      </p>

      <div className="cta">
        <p>Interessado/a? <Link to="/contactos">Entre em contacto</Link></p>
      </div>
    </section>
  )
}

export default QuemSou
