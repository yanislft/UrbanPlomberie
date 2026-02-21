import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UpLogo from "../assets/logo/upLogo1.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    if (isOpen) 
    {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
      setIsMenuVisible(true);
    } 
    
    else 
    {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) 
      {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }

      if (isMenuVisible) 
      {
        const t = setTimeout(() => setIsMenuVisible(false), 400);
        return () => clearTimeout(t);
      }
    }
  }, [isOpen]);

  const links = [
    {type : "a", fr: "À propos", href: "/#about" },
    {type : "a", fr: "Prestations", href: "/#presta" },
    {type : "a", fr: "Chantiers", href: "/#chantiers" },
    {type : "a", fr: "Avis", href: "/#avis" },
    {type : "route", fr: "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-container">
        
        <img src={UpLogo} className="navbar-logo" alt="UrbanPlomberieLogo"/>

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
                {link.type === "route" ? (
                  <a
                    href={link.href}
                    className="navbar-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.fr}
                  </a>
                ) : (
                  <a href={link.href} className="navbar-link" onClick={() => setIsOpen(false)}>
                  {link.fr}
                </a>
                )}
              </li>
            ))}
          </ul>
        )}

        <ul className="navbar-links d-none d-md-flex">
          {links.map((link) => (
            <li key={link.href}>
              {link.type === "route" ? (
                <a href={link.href} className="navbar-link">
                  {link.fr}
                </a>
              ) : (
                <a href={link.href} className="navbar-link">
                  {link.fr}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
