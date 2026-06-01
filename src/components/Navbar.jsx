import { useState, useEffect } from "react";
import LogoWhite from "../assets/logo/upLogo1White.svg";
import LogoColor from "../assets/logo/upLogo1.svg";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>
  </svg>
);

const links = [
  { fr: "À propos",    href: "/#about" },
  { fr: "Prestations", href: "/#presta" },
  { fr: "Chantiers",   href: "/#chantiers" },
  { fr: "Avis",        href: "/#avis" },
  { fr: "Contact",     href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header id="navbar" className={`up-header${scrolled ? " scrolled" : ""}`}>
        <div className="up-wrap up-nav">

          <a href="/" className="up-brand" aria-label="Urban Plomberie accueil">
            <img
              src={scrolled ? LogoColor : LogoWhite}
              alt="Urban Plomberie"
              className="up-brand-logo"
            />
          </a>

          <ul className="up-nav-links">
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.fr}</a></li>
            ))}
          </ul>

          <div className="up-nav-cta">
            <a href="tel:+33779432986" className="up-nav-phone">
              <span className="ic"><PhoneIcon /></span>
              <span className="t">
                <small>Urgence 24H/24</small>
                <b>Nous appeler</b>
              </span>
            </a>
            <a href="/contact" className="up-btn up-btn-quote nav-btn-devis">Demander un devis</a>
            <button
              className={`up-burger${open ? " is-open" : ""}`}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </header>

      {open && (
        <div className="up-mnav">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close}>{l.fr}</a>
          ))}
          <a href="tel:+33779432986" className="up-btn up-btn-call mnav-btn" onClick={close}>
            <PhoneIcon /> Appeler · 07 79 43 29 86
          </a>
          <a href="/contact" className="up-btn up-btn-quote mnav-btn" onClick={close}>
            Demander un devis
          </a>
        </div>
      )}
    </>
  );
}
