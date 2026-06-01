import { useState } from "react";

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
    <div className="contact-page up-wrap">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>Une question, un dépannage urgent ou un devis ? Contactez-nous.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-infos-box">
          <h4>Nos coordonnées</h4>
          <p><strong>Téléphone</strong><br /><a href="tel:+33779432986">07 79 43 29 86</a></p>
          <p><strong>Email</strong><br /><a href="mailto:faridridouh1@gmail.com">faridridouh1@gmail.com</a></p>
          <p><strong>Zone d'intervention</strong><br />Cavaillon et alentours</p>
        </div>

        <div className="contact-form-box">
          <h4>Envoyer un message</h4>

          {status === "success" && <div className="form-alert form-alert-ok">Message envoyé ! Nous vous répondrons rapidement.</div>}
          {status === "error"   && <div className="form-alert form-alert-err">Une erreur est survenue. Veuillez réessayer.</div>}

          <form onSubmit={handleSubmit}>
            <label>Nom<input type="text"  name="name"    required /></label>
            <label>Email<input type="email" name="email"   required /></label>
            <label>Message<textarea name="message" rows="5" required /></label>
            <button type="submit" className="up-btn up-btn-quote" disabled={status === "sending"}>
              {status === "sending" ? "Envoi…" : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
