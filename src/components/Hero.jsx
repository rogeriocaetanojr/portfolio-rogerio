import caricatura from '../assets/caricatura.png'

export function Hero() {
  return (
    <section id="inicio" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center', scrollMarginTop: '100px', padding: '0.8rem 5vw 0' }}>
      <div style={{ width: '100%' }}>
        <h1 className="titulo-gradiente" style={{ fontSize: 'clamp(2.5rem, 10vw, 8rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.04em' }}>
          OI, EU SOU O ROGÉRIO
        </h1>
        <img src={caricatura} alt="Caricatura de Rogério Caetano" style={{ width: '100%', maxWidth: '220px', marginBottom: '1.5rem', objectFit: 'contain' }} />
        <p style={{ fontSize: '1.2rem' }}>Criando meu portfólio.</p>
      </div>
    </section>
  )
}
