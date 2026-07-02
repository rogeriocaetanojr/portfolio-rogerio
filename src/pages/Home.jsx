export function Home() {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', fontFamily: 'sans-serif' }}>
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '2rem 0', 
          borderBottom: '1px solid #ccc',
          position: 'sticky',
          top: 0,
          backgroundColor: '#fff',
          zIndex: 10
        }}>
          <a href="#inicio" style={{ fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}>LOGO</a>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>

        <section id="inicio" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', scrollMarginTop: '100px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Rogério Caetano</h1>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Criando meu portfólio.</p>
        </section>

        <section id="sobre" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea', scrollMarginTop: '100px' }}>
          <h2>Sobre Mim</h2>
        </section>

        <section id="projetos" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea', scrollMarginTop: '100px' }}>
          <h2>Projetos</h2>
        </section>

        <section id="contato" style={{ padding: '4rem 0', scrollMarginTop: '100px' }}>
          <h2>Contato</h2>
        </section>
      </main>
    </>
  )
}
