export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ 
      textAlign: 'center', 
      padding: '28px 5vw', 
      color: '#9BA8B5', 
      fontSize: '0.85rem' 
    }}>
      &copy; {currentYear} Rogério Caetano
    </footer>
  )
}
