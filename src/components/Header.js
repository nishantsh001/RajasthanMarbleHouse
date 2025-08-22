import "./Header.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container" onClick={() => handleNavigation('/')}>
          <img src="/images/logo1.png" alt="Logo" className="logo-img" />
          <p className="tagline">Inspired by Nature, Designed for You</p>
        </div>

        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><div onClick={() => handleNavigation('home')}>Home</div></li>
          <li><div onClick={() => handleNavigation('products')}>Products</div></li>
        </ul>
      </nav>
    </header>
  );
}
