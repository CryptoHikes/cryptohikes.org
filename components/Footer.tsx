const Footer = () => {
  return (
    <footer className="bg-dark p-4 text-center border-t-2 border-neon-white">
      <p className="text-neon-white">&copy; {new Date().getFullYear()} CryptoHikes.</p>
    </footer>
  );
}

export default Footer;