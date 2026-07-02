import logo from '../assets/logo.png'

export function Header() {
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
    }}>
      <a href="#inicio" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo roger.io" style={{ height: '36px', objectFit: 'contain' }} />
      </a>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>
  )
}
