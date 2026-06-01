function About() {
  return (
    <section className="up-block" id="about">
      <div className="up-wrap">
        <div className="sec-head reveal">
          <span className="eyebrow center">Qui sommes-nous</span>
          <h2>À propos d'Urban Plomberie</h2>
        </div>

        <p className="up-about-lede reveal d1">
          Urban Plomberie est une entreprise spécialisée dans le{" "}
          <strong>dépannage et les travaux de plomberie</strong> à Cavaillon et
          ses alentours. Nous accompagnons particuliers et professionnels avec
          des interventions rapides, efficaces et durables.
        </p>

        <div className="value-grid">
          <div className="value reveal">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="m14.7 6.3 3 3-9.4 9.4a2 2 0 0 1-1.4.6H4v-2.9a2 2 0 0 1 .6-1.4Z"/>
                <path d="m18 3 3 3-2 2-3-3Z"/>
              </svg>
            </div>
            <h3>Expertise</h3>
            <p>Plusieurs années d'expérience dans le dépannage, la rénovation et l'installation de systèmes de plomberie.</p>
          </div>

          <div className="value reveal d1">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>
              </svg>
            </div>
            <h3>Réactivité</h3>
            <p>Intervention rapide en cas d'urgence, avec des solutions adaptées à chaque situation, 24H/24 et 6j/7.</p>
          </div>

          <div className="value reveal d2">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <h3>Confiance</h3>
            <p>Transparence sur les tarifs, conseils personnalisés et travail soigné, du premier contact à la garantie.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
