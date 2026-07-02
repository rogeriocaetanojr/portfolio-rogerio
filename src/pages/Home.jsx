import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', fontFamily: 'sans-serif' }}>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
