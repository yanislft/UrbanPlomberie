import avantChantier1 from "../assets/hero/hero1.jpg"
import apresChantier1 from "../assets/hero/hero2.jpg"

function Chantiers() {

    const cardContent = [
            { name: "Chantier1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt." },
            { name: "Chantier2", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt."  },
            { name: "Chantier3", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt." },    
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
                    <div className="image-wrapper">
                        <img
                        src={avantChantier1}
                        className="img-avant"
                        alt="Avant travaux"
                        />

                        <img
                        src={apresChantier1}
                        className="img-apres"
                        alt="Après travaux"
                        />

                        <span className="badge-chantier badge-avant">Avant</span>
                        <span className="badge-chantier badge-apres">Après</span>
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