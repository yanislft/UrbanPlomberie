import React, { useEffect, useState } from "react";
import UpLogo from "../assets/upLogo1.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMenuVisible(true);
      return;
    }

    if (isMenuVisible) {
      const t = setTimeout(() => setIsMenuVisible(false), 400);
      return () => clearTimeout(t);
    }
  }, [isOpen, isMenuVisible]);

  const links = [
    { fr: "À propos", href: "#about" },
    { fr: "Prestations", href: "#presta" },
    { fr: "Chantiers", href: "#chantiers" },
    { fr: "Devis", href: "#devis" },
    { fr: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <img src={UpLogo} className="navbar-logo"/>

        <label className="burger d-md-none" htmlFor="burger">
          <input
            type="checkbox"
            id="burger"
            checked={isOpen}
            onChange={(e) => {
              const checked = e.target.checked;
              if (checked) setIsMenuVisible(true);
              setIsOpen(checked);
            }}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>

        {isMenuVisible && (
          <ul
            className={`navbar-links d-md-none ${
              isOpen ? "scale-in-hor-right" : "scale-out-hor-right"
            }`}
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.fr}
                </a>
              </li>
            ))}
          </ul>
        )}

        <ul className="navbar-links d-none d-md-flex">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="navbar-link">
                {link.fr}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;