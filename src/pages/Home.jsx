export function Home() {
  return (
    <main style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '4rem', textAlign: 'center' }}>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contato</a>
      </nav>

      <section id="inicio">
        <h1>Rogério Caetano</h1>
        <p>Criando meu portfólio.</p>
      </section>

      <section id="sobre">
        <h2>Sobre Mim</h2>
      </section>

      <section id="projetos">
        <h2>Projetos</h2>
      </section>

      <section id="habilidades">
        <h2>Habilidades</h2>
      </section>

      <section id="contato">
        <h2>Contato</h2>
      </section>
    </main>
  )
}
