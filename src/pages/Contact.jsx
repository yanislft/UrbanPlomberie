import { useState } from "react";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <rect x="2" y="4" width="20" height="16" rx="3"/>
    <path d="m3 7 9 6 9-6"/>
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xdalnojl", {
        method: "POST",
        body: new FormData(e.target),
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); e.target.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <div className="contact-page">
      <div className="up-wrap">

        {/* En-tête */}
        <div className="contact-hero">
          <span className="eyebrow">Contactez-nous</span>
          <h1>Parlons de votre projet</h1>
          <p>Dépannage urgent, installation ou devis — on vous répond rapidement.</p>
        </div>

        <div className="contact-grid">

          {/* Infos */}
          <div className="contact-infos-box">
            <h3>Nos coordonnées</h3>

            <a href="tel:+33779432986" className="contact-info-line">
              <span className="contact-info-ic"><PhoneIcon /></span>
              <div>
                <span className="contact-info-label">Téléphone · Urgence 24H/24</span>
                <strong>07 79 43 29 86</strong>
              </div>
            </a>

            <a href="mailto:faridridouh1@gmail.com" className="contact-info-line">
              <span className="contact-info-ic"><MailIcon /></span>
              <div>
                <span className="contact-info-label">Email</span>
                <strong>faridridouh1@gmail.com</strong>
              </div>
            </a>

            <div className="contact-info-line">
              <span className="contact-info-ic"><PinIcon /></span>
              <div>
                <span className="contact-info-label">Zone d'intervention</span>
                <strong>Cavaillon &amp; alentours</strong>
              </div>
            </div>

            <div className="contact-badge">
              <span className="dot" /> Disponible 24H/24 · 6j/7
            </div>
          </div>

          {/* Formulaire */}
          <div className="contact-form-box">
            <h3>Envoyer un message</h3>

            {status === "success" && (
              <div className="form-alert form-alert-ok">✓ Message envoyé ! Nous vous répondrons rapidement.</div>
            )}
            {status === "error" && (
              <div className="form-alert form-alert-err">Une erreur est survenue. Veuillez réessayer.</div>
            )}

            <form onSubmit={handleSubmit}>
              <label>
                Nom
                <input type="text" name="name" placeholder="Votre nom" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="votre@email.com" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Décrivez votre besoin..." required />
              </label>
              <button type="submit" className="up-btn up-btn-quote contact-submit" disabled={status === "sending"}>
                {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
