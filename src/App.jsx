import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import QuemSou from './pages/QuemSou'
import Precos from './pages/Precos'
import Contactos from './pages/Contactos'
import Reviews from './pages/Reviews'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<QuemSou />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
