import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

const MOBILE = 1024;

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const mq = typeof window !== 'undefined' ? window.matchMedia(`(max-width: ${MOBILE}px)`) : null;
  const [mobile, setMobile] = useState(() => mq ? mq.matches : false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE}px)`);
    const onChange = (e) => { setMobile(e.matches); if (!e.matches) setOpen(false); };
    mq.addEventListener('change', onChange);
    setMobile(mq.matches); // sync on mount
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header id="navbar" className={`up-header${(scrolled || !isHome) ? " scrolled" : ""}`}>
        <div className="up-wrap up-nav">

          <a href="/" className="up-brand" aria-label="Urban Plomberie accueil">
            <img src={(scrolled || !isHome) ? LogoColor : LogoWhite} alt="Urban Plomberie" className="up-brand-logo" />
          </a>

          {!mobile && (
            <ul className="up-nav-links">
              {links.map(l => <li key={l.href}><a href={l.href}>{l.fr}</a></li>)}
            </ul>
          )}

          <div className="up-nav-cta">
            {!mobile && (
              <a href="tel:+33779432986" className="up-nav-phone">
                <span className="ic"><PhoneIcon /></span>
                <span className="t"><small>Urgence 24H/24</small><b>Nous appeler</b></span>
              </a>
            )}
            {!mobile && (
              <a href="/contact" className="up-btn up-btn-quote nav-btn-devis">Demander un devis</a>
            )}
            {mobile && (
              <button
                className={`up-burger${open ? " is-open" : ""}`}
                onClick={() => setOpen(o => !o)}
                aria-label={open ? "Fermer" : "Menu"}
              >
                <span /><span /><span />
              </button>
            )}
          </div>

        </div>
      </header>

      {mobile && open && (
        <div className="up-mnav">
          {links.map(l => (
            <a key={l.href} href={l.href} className="mnav-link" onClick={close}>{l.fr}</a>
          ))}
          <div className="mnav-cta">
            <a href="tel:+33779432986" className="up-btn up-btn-call" onClick={close}>
              <PhoneIcon /> 07 79 43 29 86
            </a>
            <a href="/contact" className="up-btn up-btn-quote" onClick={close}>
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </>
  );
}
