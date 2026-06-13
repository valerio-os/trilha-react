import { useState } from "react";
import LoginModal from "./LoginModal";
import "./Navbar.css";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list">
          <li>
            <button className="navbar__link" onClick={() => scrollTo("conpets")}>
              Os Conpets
            </button>
          </li>

          <li className="navbar__dropdown-wrapper">
            <span className="navbar__link navbar__link--nodrop">
              Sobre nós
            </span>
            <ul className="navbar__dropdown">
              <li className="navbar__dropdown-item">Missão</li>
              <li className="navbar__dropdown-item">Valores</li>
            </ul>
          </li>

          <li>
            <button className="navbar__link" onClick={() => scrollTo("faq")}>
              FAQ
            </button>
          </li>

          <li>
            <button className="navbar__link" onClick={() => scrollTo("contato")}>
              Contato
            </button>
          </li>

          <li>
            <button
              className="navbar__link navbar__link--login"
              onClick={() => setShowLogin(true)}
            >
              Login ▶
            </button>
          </li>
        </ul>
      </nav>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}
