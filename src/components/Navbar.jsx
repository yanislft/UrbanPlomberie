import { useState, useEffect } from "react";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>
  </svg>
);

const DropIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 2c-3.2 4-5.5 7-5.5 10.2A5.5 5.5 0 0 0 12 17.7a5.5 5.5 0 0 0 5.5-5.5C17.5 9 15.2 6 12 2Z" fill="white"/>
  </svg>
);

const links = [
  { fr: "À propos", href: "/#about" },
  { fr: "Prestations", href: "/#presta" },
  { fr: "Chantiers", href: "/#chantiers" },
  { fr: "Avis", href: "/#avis" },
  { fr: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            <span className="mark"><DropIcon /></span>
            Urban<b>Plomberie</b>
          </a>

          <ul className="up-nav-links">
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.fr}</a></li>
            ))}
          </ul>

          <div className="up-nav-cta">
            <a href="tel:+33779432986" className="up-nav-phone">
              <span className="ic"><PhoneIcon /></span>
              <span className="t"><small>Urgence 24H/24</small><b>07 79 43 29 86</b></span>
            </a>
            <a href="/contact" className="up-btn up-btn-quote">Demander un devis</a>
            <button className="up-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`up-mnav${open ? " open" : ""}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.fr}</a>
        ))}
        <a href="tel:+33779432986" className="up-btn up-btn-call" onClick={close}>
          <PhoneIcon /> Appeler · 07 79 43 29 86
        </a>
        <a href="/contact" className="up-btn up-btn-quote" onClick={close}>Demander un devis</a>
      </div>
    </>
  );
};

export default Navbar;
