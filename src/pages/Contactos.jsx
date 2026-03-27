import { useState } from 'react'

const vagas = [
  { ano: '5.º ano', disponivel: true },
  { ano: '6.º ano', disponivel: true },
  { ano: '7.º ano', disponivel: true },
  { ano: '8.º ano', disponivel: true },
  { ano: '9.º ano', disponivel: true },
  { ano: '10.º ano', disponivel: false },
  { ano: '11.º ano', disponivel: false },
  { ano: '12.º ano', disponivel: false },
]

function Contactos() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(false)
    const form = e.target

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      const response = await fetch('https://formspree.io/f/mvzvzoob', {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
      })
      if (response.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

  return (
    <section className="page contactos">
      <h2>Contactos</h2>

      <div className="vagas-section">
        <h3>Disponibilidade</h3>
        <div className="vagas-grid">
          {vagas.map((v) => (
            <div className={`vaga-item ${v.disponivel ? 'disponivel' : 'indisponivel'}`} key={v.ano}>
              <span className="vaga-ano">{v.ano}</span>
              <span className="vaga-status">
                {v.disponivel ? 'Vagas disponíveis' : 'Indisponível'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="contactos-intro">
        Preencha o formulário abaixo ou mande-me mensagem no WhatsApp para mais informações.
      </p>
      <p className="whatsapp-link">
        <a href="https://wa.me/351967305683" target="_blank" rel="noopener noreferrer">
          +351 96 730 56 83
        </a>
      </p>

      <div className="contact-form-wrapper">
        {submitted ? (
          <div className="form-success">
            <p>Mensagem enviada com sucesso! Entrarei em contacto brevemente.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
            <div className="form-group">
              <label htmlFor="name">Nome do aluno/encarregado de educação</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="ano">Ano</label>
              <select id="ano" name="ano" required>
                <option value="">Selecione o ano</option>
                <option value="5º ano">5.º ano</option>
                <option value="6º ano">6.º ano</option>
                <option value="7º ano">7.º ano</option>
                <option value="8º ano">8.º ano</option>
                <option value="9º ano">9.º ano</option>
                <option value="10º ano">10.º ano</option>
                <option value="11º ano">11.º ano</option>
                <option value="12º ano">12.º ano</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contacto telefónico</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows="5"></textarea>
            </div>
            {error && <p className="form-error">Erro ao enviar. Por favor tente novamente.</p>}
            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contactos
