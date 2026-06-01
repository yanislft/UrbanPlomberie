import LogoWhite from "../assets/logo/upLogo1White.svg";

function Footer() {
  return (
    <footer className="up-footer" id="contact">
      <div className="up-wrap">
        <div className="foot-grid">

          <div>
            <div className="foot-brand">
              <img src={LogoWhite} alt="Urban Plomberie" style={{ height: 60, width: "auto" }} />
            </div>
            <p className="desc">
              Dépannage, installation et entretien de vos équipements de plomberie.
              Intervention rapide et travail soigné, à Cavaillon et ses alentours.
            </p>
            <div className="foot-social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13v-2a1 1 0 0 1 1-1Z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="foot-col">
            <h5>Contact</h5>
            <span className="ico-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Cavaillon &amp; alentours
            </span>
            <a href="tel:+33779432986" className="ico-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>
              07 79 43 29 86
            </a>
            <a href="mailto:faridridouh1@gmail.com" className="ico-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 7 9 6 9-6"/></svg>
              faridridouh1@gmail.com
            </a>
          </div>

          <div className="foot-col">
            <h5>Liens utiles</h5>
            <a href="/#presta">Services</a>
            <a href="/#chantiers">Chantiers</a>
            <a href="/#avis">Avis</a>
            <a href="/contact">Contact</a>
            <a href="/mentionslegales">Mentions légales</a>
          </div>

          <div className="foot-col">
            <h5>Horaires</h5>
            <span className="ico-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              Urgences 24H/24
            </span>
            <span>Lundi – Samedi · 6j/7</span>
            <span>Particuliers &amp; professionnels</span>
            <a href="/contact" className="up-btn up-btn-quote" style={{ marginTop: 14 }}>Demander un devis</a>
          </div>

        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Urban Plomberie — Tous droits réservés</span>
          <span>Plombier à Cavaillon</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
