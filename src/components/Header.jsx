import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <h1>Explicações de Matemática Online</h1>
        <p className="subtitle">Prof. Isabel Silva</p>
        <nav className="main-nav">
          <NavLink to="/" end>Quem sou</NavLink>
          <NavLink to="/precos">Preços</NavLink>
          <NavLink to="/contactos">Contactos</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
