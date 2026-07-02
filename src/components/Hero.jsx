import caricatura from '../assets/caricatura.png'

export function Hero() {
  return (
    <section id="inicio" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', scrollMarginTop: '100px' }}>
      <img src={caricatura} alt="Caricatura de Rogério Caetano" style={{ width: '100%', maxWidth: '220px', marginBottom: '2rem', objectFit: 'contain' }} />
      <h1 className="titulo-gradiente" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Rogério Caetano</h1>
      <p style={{ fontSize: '1.2rem' }}>Criando meu portfólio.</p>
    </section>
  )
}
