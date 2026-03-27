import { useEffect } from 'react'

function Precos() {
  useEffect(() => { document.title = 'Preços - Prof. Isabel Silva | Explicações de Matemática Online' }, [])
  return (
    <section className="page precos">
      <h2>Preços e Informações</h2>

      <p>
        As explicações são dadas exclusivamente online e são pagas mensalmente.
      </p>

      <h3>Porquê trabalhar com mensalidade em vez de valores horários?</h3>
      <p>
        Para me permitir marcar explicações extra com os alunos antes dos testes, para eles
        poderem estudar mais e tirar todas as dúvidas. A marcação destas explicações não implica
        um custo extra para os encarregados de educação, que apenas têm de pagar a mensalidade.
      </p>

      <h3>Valor da mensalidade</h3>
      <div className="pricing-table-wrapper">
        <table className="pricing-table">
          <thead>
            <tr>
              <th></th>
              <th>1 aula de 1h30 por semana</th>
              <th>2 aulas de 1h30 por semana</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>5.&ordm; a 9.&ordm; ano</strong></td>
              <td>75&euro;</td>
              <td>90&euro;</td>
            </tr>
            <tr>
              <td><strong>10.&ordm; a 12.&ordm; ano</strong></td>
              <td>75&euro;</td>
              <td>95&euro;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Informações adicionais</h3>
      <ul>
        <li>As explicações são pagas por MBWay ou transferência bancária mensalmente até ao dia 7 de cada mês.</li>
        <li>Se os alunos tiverem férias letivas, não é dada explicação.</li>
        <li>Se tiverem teste, são dadas algumas explicações extra, conforme a necessidade de cada aluno e avaliando caso a caso.</li>
        <li>Todos os alunos são colocados, por mim, num grupo de 2 ou 3 alunos do seu ano conforme disponibilidade, e conforme o seu perfil encaixe no grupo.</li>
        <li>Não dou explicações individuais.</li>
      </ul>
    </section>
  )
}

export default Precos
