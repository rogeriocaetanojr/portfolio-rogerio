export function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', paddingBottom: '2rem', borderBottom: '1px solid #ccc' }}>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contato</a>
      </nav>

      <section id="inicio" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Rogério Caetano</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>Criando meu portfólio.</p>
      </section>

      <section id="sobre" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <h2>Sobre Mim</h2>
      </section>

      <section id="projetos" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <h2>Projetos</h2>
      </section>

      <section id="habilidades" style={{ padding: '4rem 0', borderBottom: '1px solid #eaeaea' }}>
        <h2>Habilidades</h2>
      </section>

      <section id="contato" style={{ padding: '4rem 0' }}>
        <h2>Contato</h2>
      </section>
    </main>
  )
}
