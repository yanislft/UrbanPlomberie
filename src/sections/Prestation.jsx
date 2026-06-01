import renovation from "../assets/prestations/renovation.jpg";
import entretien from "../assets/prestations/entretien.jpg";
import installation from "../assets/prestations/installation.jpg";
import urg from "../assets/prestations/urg.jpg";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

const services = [
  {
    img: urg,
    tag: "Urgence",
    urgent: true,
    tagIcon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>,
    title: "Dépannage d'urgence",
    desc: "Intervention rapide pour fuites, pannes et urgences 24H/24 · 6j/7. On décroche et on intervient vite.",
    cta: "Demander une intervention",
  },
  {
    img: installation,
    tag: "Installation",
    urgent: false,
    tagIcon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 21v-7m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v9m-6 0h6m4 7v-5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v5"/></svg>,
    title: "Installation",
    desc: "Installation de sanitaires, robinetterie et équipements, raccordés proprement et aux normes en vigueur.",
    cta: "Demander un devis",
  },
  {
    img: renovation,
    tag: "Rénovation",
    urgent: false,
    tagIcon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 12h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6Z"/><path d="M7 12V7a3 3 0 0 1 6 0M9 4h.01"/></svg>,
    title: "Rénovation",
    desc: "Rénovation complète ou partielle de salle de bain, du réseau à la robinetterie, clés en main.",
    cta: "Parler de mon projet",
  },
  {
    img: entretien,
    tag: "Entretien",
    urgent: false,
    tagIcon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 4v5a2 2 0 0 0 2 2h5"/><path d="M3 12a9 9 0 0 1 9-9 8.4 8.4 0 0 1 6 2.5L21 9"/><path d="M21 12a9 9 0 0 1-9 9 8.4 8.4 0 0 1-6-2.5L3 15"/></svg>,
    title: "Entretien",
    desc: "Entretien préventif de vos installations pour éviter les pannes coûteuses et prolonger leur durée de vie.",
    cta: "Programmer un entretien",
  },
];

function Prestation() {
  return (
    <section className="up-block up-prestations" id="presta">
      <div className="up-wrap">
        <div className="sec-head reveal">
          <span className="eyebrow center">Nos prestations</span>
          <h2>Des services de plomberie fiables et rapides</h2>
          <p>Adaptés à vos besoins, des particuliers aux professionnels — un seul interlocuteur du diagnostic à la garantie.</p>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => (
            <div key={i} className={`svc${s.urgent ? " urgent" : ""} reveal${i % 2 === 1 ? " d1" : ""}`}>
              <div className="svc-media">
                <img src={s.img} alt={s.title} />
                <span className="svc-tag">{s.tagIcon} {s.tag}</span>
              </div>
              <div className="svc-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="/contact" className="svc-more">
                  {s.cta} <ArrowIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Prestation;
