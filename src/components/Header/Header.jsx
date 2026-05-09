import "./Header.css";

export default function Header(onInfo) {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="#home" className="logo">
          {onInfo.name}
        </a>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href={onInfo.phoneLink} className="header-button">
          Call Now
        </a>
      </div>
    </header>
  );
}
