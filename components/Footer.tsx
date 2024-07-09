const Footer = () => {
  return (
    <footer className="bg-dark p-4 text-center border-t-2 border-neon-purple">
      <p className="text-neon-purple">&copy; {new Date().getFullYear()} CryptoHikes.</p>
    </footer>
  )
}

export default Footer