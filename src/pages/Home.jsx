import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Prestation from "../sections/Prestation";
import Chantiers from "../sections/Chantiers";
import GoogleReviews from "../sections/GoogleReviews";
import PhoneIcon from "../components/PhoneIcon";

function CtaBand({ title, sub }) {
  return (
    <section className="up-cta-band">
      <div className="up-wrap">
        <div className="cta-inner reveal">
          <div>
            <h2>{title}</h2>
            <p>{sub}</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+33779432986" className="call-fab" aria-label="Appeler"><PhoneIcon /></a>
            <a href="/contact" className="up-btn up-btn-light">Demander un devis</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    let tries = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
      if (tries++ < 30) setTimeout(tryScroll, 50);
    };
    tryScroll();
  }, [location.hash]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Prestation />
      <CtaBand
        title="Contactez-nous pour un devis gratuit ou une intervention rapide"
        sub="Artisan local à Cavaillon, disponible 24H/24 et 6j/7."
      />
      <Chantiers />
      <CtaBand
        title="Un projet, une fuite, une question ?"
        sub="On vous répond vite et on chiffre avant de commencer."
      />
      <GoogleReviews />
    </>
  );
}

export default Home;
