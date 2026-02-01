import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const links = [
  { id: "home", fr: "À propos", en: "About me" },
  { id: "projects", fr: "Projets", en: "Projects" },
  { id: "skills", fr: "Compétences", en: "Skills" },
  { id: "contact", fr: "Contact", en: "Contact" },
];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Yanis Laftimi</h1>
        <button className="navbar-toggle" onClick={handleToggle}>
          ☰
        </button>
        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <ul className="navbar-links">
            {links.map(link => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="navbar-link">
                  {language === "fr" ? link.fr : link.en}
                </a>
              </li>
            ))}
            <button onClick={toggleLanguage} className="language-button desktop-only">
             {language === "fr" ? "EN" : "FR"}
            
          </button>

          <button onClick={toggleLanguage} className="language-button-mobile mobile-only">
            {language === "fr" ? "EN" : "FR"}
            
          </button>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;