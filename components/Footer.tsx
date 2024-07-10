const Footer = () => {
  return (
    <footer className="p-4 text-center border-t-2 border-footer bg-footer">
      <p className="text-footer">&copy; {new Date().getFullYear()} CryptoHikes.</p>
    </footer>
  );
};

export default Footer;