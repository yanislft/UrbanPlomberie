import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("idle");
  // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xdalnojl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="container py-5 contact-page">
      
      {/* Titre */}
      <div className="row mb-5 text-center">
        <div className="col">
          <h1 className="fw-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="45"
              width="50.625"
              viewBox="0 0 576 512"
              className="me-2"
            >
              <path
                fill="#1f396d"
                d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80zm-24-96a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm240-48l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
              />
            </svg>
            Contact
          </h1>
          <p className="text-muted mt-2">
            Une question, un dépannage urgent ou un devis ? Contactez-nous.
          </p>
        </div>
      </div>

      <div className="row g-4">
        
        {/* Infos de contact */}
        <div className="col-lg-5">
          <div className="p-4 h-100 border rounded contact-infos">
            <h4 className="fw-bold mb-3">Nos coordonnées</h4>

            <p className="mb-2">
              <strong>Téléphone :</strong><br />
              <a href="tel:+33779432985" className="text-decoration-none">
                07 79 43 29 85
              </a>
            </p>

            <p className="mb-2">
              <strong>Email :</strong><br />
              <a href="mailto:faridridouh1@gmail.com" className="text-decoration-none">
                faridridouh1@gmail.com
              </a>
            </p>

            <p className="mb-0">
              <strong>Zone d’intervention :</strong><br />
              Cavaillon et alentours
            </p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="col-lg-7">
          <div className="p-4 border rounded contact-form">
            <h4 className="fw-bold mb-3">Envoyer un message</h4>

            {status === "success" && (
              <div className="alert alert-success">
                Message envoyé avec succès. Nous vous répondrons rapidement.
              </div>
            )}

            {status === "error" && (
              <div className="alert alert-danger">
                Une erreur est survenue. Veuillez réessayer.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nom</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Envoi..." : "Envoyer"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;