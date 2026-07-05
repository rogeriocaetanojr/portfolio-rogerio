export function ProjectCard({ nome, descricao, imagens }) {
  return (
    <div style={{ backgroundColor: '#0E0E0E', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '16px', padding: '32px', maxWidth: '780px', width: '100%', margin: '0 auto' }}>
      <h3 style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>{nome}</h3>
      <p style={{ fontSize: '1rem', color: '#B0B0B0', marginTop: '8px' }}>
        {descricao}
      </p>
      <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', gap: '16px', overflowX: 'auto', paddingBottom: '8px' }}>
        {imagens && imagens.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`${nome} screenshot ${index + 1}`} 
            style={{ 
              width: 'auto', 
              height: '320px',
              borderRadius: '16px',
              flexShrink: 0
            }} 
          />
        ))}
      </div>
    </div>
  );
}
