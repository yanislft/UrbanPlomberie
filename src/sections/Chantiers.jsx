import chauffeEau from "../assets/chantiers/chauffeEau.jpg"
import clarinette from "../assets/chantiers/clarinette.jpg"
import cuisine from "../assets/chantiers/cuisine.jpg"

function Chantiers() {

    const cardContent = [
            { name: "Cuisine", desc: "Installation complète des arrivées d’eau pour cuisine, comprenant le raccordement du robinet, la pose de la vasque ainsi que l’alimentation et l’évacuation du lave-vaisselle. Travail soigné et conforme aux normes en vigueur.", img :  cuisine },
            { name: "Nourrice", desc: "Installation d’une nourrice de distribution en laiton avec vannes d’arrêt individuelles. Mise en place d’un réseau PER propre et organisé permettant une distribution optimisée et sécurisée de l’eau vers les différents points du logement.", img : clarinette  },
            { name: "Ballon d'eau chaude", desc: "Installation d’un ballon d’eau chaude avec raccordement au réseau d’eau et au circuit électrique. Mise en place du groupe de sécurité et vérification complète de l’étanchéité pour garantir un fonctionnement fiable et sécurisé.", img : chauffeEau},    
        ];

  return (
    <section id="chantiers" className="py-5">
  <div className="container">
    {/* Titre */}
    <div className="text-center mb-5">
      <h2 className="chantiers-title fw-bold">Nos chantiers</h2>
      <p className="text-muted">
        Découvrez quelques-unes de nos réalisations récentes
      </p>
    </div>

    {/* Grille */}
    <div className="row g-4">

        {cardContent.map((content, index) => (
            <div key = {index} className="col-12 col-md-6 col-lg-4">

                <div 
                  className="card chantier-card h-100 shadow-sm" 
                  onClick={(e) => e.currentTarget.classList.toggle("is-after")}>
                    <div className="image-chantier">
                        <img
                        src={content.img}
                        />
                    </div>

                    <div className="card-body">
                        <h5 className="chcard-title">{content.name}</h5>
                        <p className="card-text">
                            {content.desc}
                        </p>
                    </div>
                </div>
            </div>
        ))}



      
    </div>
  </div>
</section>
  );
}

export default Chantiers;