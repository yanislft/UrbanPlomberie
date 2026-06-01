import chauffeEau from "../assets/chantiers/chauffeEau.jpg";
import clarinette from "../assets/chantiers/clarinette.jpg";
import cuisine from "../assets/chantiers/cuisine.jpg";

const chantiers = [
  {
    img: cuisine,
    k: "Installation",
    title: "Cuisine",
    desc: "Installation complète des arrivées d'eau pour cuisine, comprenant le raccordement du robinet, la pose de la vasque ainsi que l'alimentation et l'évacuation du lave-vaisselle. Travail soigné et conforme aux normes en vigueur.",
    num: "01",
  },
  {
    img: clarinette,
    k: "Réseau PER",
    title: "Nourrice",
    desc: "Installation d'une nourrice de distribution en laiton avec vannes d'arrêt individuelles. Mise en place d'un réseau PER propre et organisé permettant une distribution optimisée et sécurisée de l'eau vers les différents points du logement.",
    num: "02",
  },
  {
    img: chauffeEau,
    k: "Eau chaude sanitaire",
    title: "Ballon d'eau chaude",
    desc: "Installation d'un ballon d'eau chaude avec raccordement au réseau d'eau et au circuit électrique. Mise en place du groupe de sécurité et vérification complète de l'étanchéité pour garantir un fonctionnement fiable et sécurisé.",
    num: "03",
  },
];

function Chantiers() {
  return (
    <section className="up-block" id="chantiers">
      <div className="up-wrap">
        <div className="sec-head reveal">
          <span className="eyebrow center">Nos chantiers</span>
          <h2>Nos chantiers</h2>
          <p>Découvrez quelques-unes de nos réalisations récentes.</p>
        </div>

        <div className="chantier-grid">
          {chantiers.map((c, i) => (
            <div key={i} className={`chantier-card-new reveal${i > 0 ? ` d${i}` : ""}`}>
              <div className="chantier-media">
                <img src={c.img} alt={c.title} />
                <span className="chantier-num">{c.num}</span>
              </div>
              <div className="chantier-body-new">
                <span className="k">{c.k}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Chantiers;
