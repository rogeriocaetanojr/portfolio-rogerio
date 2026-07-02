export function Header() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '2rem 0', 
      borderBottom: '1px solid #222',
      position: 'sticky',
      top: 0,
      backgroundColor: '#0C0C0C',
      zIndex: 10
    }}>
      <a href="#inicio" style={{ fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}>LOGO</a>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>
  )
}
