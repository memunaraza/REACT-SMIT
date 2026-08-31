import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        DevPort
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Action Button */}
      <a href="#hire" className="navbar-btn">
        Get Started
      </a>
    </nav>
  );
};

export default Navbar;