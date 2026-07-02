import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

export function Contact() {
  return (
    <section id="contato" style={{ minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '60px 5vw 6rem', scrollMarginTop: '100px' }}>
      <div style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h2>Contato</h2>
          <p style={{ color: '#9BA8B5', fontSize: '1.15rem', marginTop: '0.5rem' }}>Me encontre em um dos canais abaixo.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 3rem', maxWidth: '400px' }}>
          <a href="https://wa.me/41992522036" target="_blank" rel="noopener noreferrer" className="link-contato">
            <FaWhatsapp size={24} /> Whatsapp
          </a>
          <a href="https://linkedin.com/in/rogeriocaetanojr/" target="_blank" rel="noopener noreferrer" className="link-contato">
            <FaLinkedin size={24} /> Linkedin
          </a>
          <a href="https://github.com/rogeriocaetanojr" target="_blank" rel="noopener noreferrer" className="link-contato">
            <FaGithub size={24} /> Github
          </a>
          <a href="mailto:rcaetanojunior@gmail.com" className="link-contato">
            <FaEnvelope size={24} /> Email
          </a>
        </div>
      </div>
    </section>
  )
}
