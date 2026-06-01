const reviews = [
  { initial: "M", name: "MJKV Jeannin", date: "il y a 3 mois", text: "« Nous avons fait appel à Urban Plomberie en urgence pour un dégât des eaux. Intervention très rapide, travail propre et soigné. Je recommande vivement. »" },
  { initial: "K", name: "Kelsy V", date: "il y a 3 mois", text: "« Je recommande, le plombier est venu un samedi soir, rapide et efficace. Très professionnel et de bon conseil. Un grand merci pour la réactivité. »" },
  { initial: "M", name: "Mousstapha El.", date: "il y a 3 mois", text: "« Plombier efficace, rapidité, propreté, je recommande fortement. Tarif annoncé clairement et respecté. On le rappellera sans hésiter. »" },
  { initial: "M", name: "moh kiai", date: "il y a 3 mois", text: "« Je recommande fortement Urban Plomberie pour son travail et sa rapidité. Quelqu'un de sérieux, honnête et à l'écoute. »" },
  { initial: "B", name: "Benhaouda", date: "il y a 3 mois", text: "« Très bon plombier, je recommande. Travail propre, ponctuel et de bon conseil. Merci pour votre professionnalisme. »" },
  { initial: "S", name: "Sabri Abidi", date: "il y a 3 mois", text: "« Plombier très compétent, travaux très bien réalisés et respectant son devis. Rien à redire, je recommande les yeux fermés. »" },
];

function GoogleReviews() {
  return (
    <section className="up-block up-reviews" id="avis">
      <div className="up-wrap">
        <div className="sec-head reveal">
          <span className="eyebrow center">Avis clients</span>
          <h2>Ils nous font confiance !</h2>
        </div>

        <div className="rev-summary reveal d1">
          <div className="glogo">
            <span style={{ fontSize: 22, letterSpacing: -1, fontFamily: "Archivo", fontWeight: 700 }}>
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </span>
          </div>
          <div className="vline" />
          <div style={{ textAlign: "center" }}>
            <span className="score">5,0</span>
            <div className="stars">★★★★★</div>
          </div>
          <div className="vline" />
          <div>
            <b style={{ fontFamily: "Archivo", color: "var(--white)", fontSize: 18 }}>Note parfaite</b>
            <small>sur les avis Google vérifiés</small>
          </div>
        </div>

        <div className="rev-grid">
          {reviews.map((r, i) => (
            <div key={i} className={`rev reveal${i % 3 > 0 ? ` d${i % 3}` : ""}`}>
              <div className="rev-top">
                <div className="rev-stars">★★★★★</div>
                <span className="gmark">G</span>
              </div>
              <p>{r.text}</p>
              <div className="rev-who">
                <span className="av">{r.initial}</span>
                <div><b>{r.name}</b><small>{r.date}</small></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GoogleReviews;
