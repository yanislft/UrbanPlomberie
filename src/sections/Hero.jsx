import heroBg from "../assets/hero/hero1.jpg";
import PhoneIcon from "../components/PhoneIcon";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

const LocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const DownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M12 5v14M6 13l6 6 6-6"/>
  </svg>
);

function Hero() {
  return (
    <section className="up-hero" id="main-content">
      <div className="up-hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />

      <div className="up-hero-inner up-wrap">
        <div className="up-hero-content">
          <div className="badge-row reveal">
            <span className="pill"><span className="dot" /> Disponible — urgence 24H/24</span>
            <span className="pill"><LocIcon /> Cavaillon &amp; ses alentours</span>
          </div>

          <h1 className="reveal d1">
            Dépannage &amp; travaux de plomberie{" "}
            <span className="hl">rapides et fiables</span>
          </h1>

          <p className="lede reveal d2">
            Intervention d'urgence 24H/24 · 6j/7 — pour les particuliers et les
            professionnels, à Cavaillon et dans tout le Luberon.
          </p>

          <div className="hero-actions reveal d3">
            <a href="tel:+33779432986" className="call-fab" aria-label="Appeler">
              <PhoneIcon />
            </a>
            <a href="/contact" className="up-btn up-btn-quote">
              Demander un devis <ArrowIcon />
            </a>
          </div>

          <div className="hero-note reveal d4">
            <span className="g"><span className="stars">★★★★★</span> 5,0</span>
            <span>· Note parfaite sur les avis Google · Devis gratuit</span>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        Découvrir <DownIcon />
      </div>
    </section>
  );
}

export default Hero;
