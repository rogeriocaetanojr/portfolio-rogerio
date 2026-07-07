import { useState } from 'react'
import logo from '../assets/logo.png'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '2rem 5vw', 
      borderBottom: '1px solid #222',
      position: 'sticky',
      top: 0,
      backgroundColor: '#0C0C0C',
      zIndex: 10
    }}
      className="header-nav"
    >
      <a href="#inicio" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo roger.io" style={{ height: '36px', objectFit: 'contain' }} />
      </a>

      {/* Links desktop */}
      <div className="header-links-desktop" style={{ display: 'flex', gap: '2rem', fontSize: '1.15rem' }}>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
        <a href={`${import.meta.env.BASE_URL}CV - Rogério Caetano.pdf`} target="_blank" rel="noopener noreferrer">Currículo</a>
      </div>

      {/* Botão hambúrguer (mobile) */}
      <button
        className="header-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#D7E2EA',
          fontSize: '1.6rem',
          cursor: 'pointer',
          padding: '4px',
          lineHeight: 1
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div
          className="header-mobile-menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#0C0C0C',
            borderBottom: '1px solid #222',
            display: 'flex',
            flexDirection: 'column',
            padding: '0.5rem 5vw 1rem',
            zIndex: 10
          }}
        >
          <a href="#sobre" onClick={handleLinkClick} className="header-mobile-link">Sobre</a>
          <a href="#projetos" onClick={handleLinkClick} className="header-mobile-link">Projetos</a>
          <a href="#contato" onClick={handleLinkClick} className="header-mobile-link">Contato</a>
          <a href={`${import.meta.env.BASE_URL}CV - Rogério Caetano.pdf`} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick} className="header-mobile-link">Currículo</a>
        </div>
      )}
    </nav>
  )
}
