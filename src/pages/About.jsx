function About() {
  return (
    <section className="about py-5" id="about">
      <div className="container">
        <h2 className="about-title text-center mb-4">
          À propos d’Urban Plomberie
        </h2>

        <p className="about-text text-center mx-auto mb-5 col-lg-8">
          Urban Plomberie est une entreprise spécialisée dans le dépannage
          et les travaux de plomberie à Cavaillon et ses alentours.
          Nous accompagnons particuliers et professionnels avec des
          interventions rapides, efficaces et durables.
        </p>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="about-card h-100">
              <h3><svg xmlns="http://www.w3.org/2000/svg" height="20" width="22.5" viewBox="0 0 576 512"><path fill="#7a7a7a" d="M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z"/></svg> Expertise</h3>
              <p>
                Plusieurs années d’expérience dans le dépannage, la rénovation
                et l’installation de systèmes de plomberie.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="about-card h-100">
              <h3><svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#FFD43B" d="M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z"/></svg> Réactivité</h3>
              <p>
                Intervention rapide en cas d’urgence, avec des solutions
                adaptées à chaque situation.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="about-card h-100">
              <h3><svg xmlns="http://www.w3.org/2000/svg" height="20" width="22.5" viewBox="0 0 576 512"><path fill="#63E6BE" d="M268.9 85.2L152.3 214.8c-4.6 5.1-4.4 13 .5 17.9 30.5 30.5 80 30.5 110.5 0l31.8-31.8c4.2-4.2 9.5-6.5 14.9-6.9 6.8-.6 13.8 1.7 19 6.9L505.6 376 576 320 576 32 464 96 440.2 80.1C424.4 69.6 405.9 64 386.9 64l-70.4 0c-1.1 0-2.3 0-3.4 .1-16.9 .9-32.8 8.5-44.2 21.1zM116.6 182.7L223.4 64 183.8 64c-25.5 0-49.9 10.1-67.9 28.1L112 96 0 32 0 320 156.4 450.3c23 19.2 52 29.7 81.9 29.7l15.7 0-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l41 41 9 0c19.1 0 37.8-4.3 54.8-12.3L359 441c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l32 32 17.5-17.5c8.9-8.9 11.5-21.8 7.6-33.1l-137.9-136.8-14.9 14.9c-49.3 49.3-129.1 49.3-178.4 0-23-23-23.9-59.9-2.2-84z"/></svg> Confiance</h3>
              <p>
                Transparence sur les tarifs, conseils personnalisés et travail
                soigné.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;