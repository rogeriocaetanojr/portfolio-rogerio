export function ProjectCard({ nome, descricao, imagens }) {
  return (
    <div style={{ backgroundColor: '#0E0E0E', border: '1px solid rgba(255, 255, 255, 0.18)', borderRadius: '16px', padding: '32px', maxWidth: '780px', width: '100%', margin: '0 auto' }}>
      <h3 style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>{nome}</h3>
      <p style={{ fontSize: '1rem', color: '#B0B0B0', marginTop: '8px' }}>
        {descricao}
      </p>
      <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        {imagens && imagens.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`${nome} screenshot ${index + 1}`} 
            style={{ 
              width: '100%', 
              height: '100%', 
              minHeight: '200px',
              objectFit: 'cover', 
              borderRadius: '12px' 
            }} 
          />
        ))}
      </div>
    </div>
  );
}
