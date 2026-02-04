import renovation from "../assets/prestations/renovation.jpg";
import entretien from "../assets/prestations/entretien.jpg";
import installation from "../assets/prestations/installation.jpg";
import urg from "../assets/prestations/urg.jpg";
import ContactButtons from "../components/Contact-buttons";

function Prestation() {

    const cardContent = [
        { name: "Dépannage d’urgence", desc: "Intervention rapide pour fuites, pannes et urgences 24H/24 6j/7.", img: urg},
        { name: "Installation", desc: "Installation de sanitaires, robinetterie et équipements.", img: installation },
        { name: "Rénovation", desc: "Rénovation complète ou partielle de salle de bain.", img: renovation },    
        { name: "Entretien", desc: "Entretien préventif pour éviter les pannes coûteuses.", img: entretien },    
    ];

  return (
        <section className="prestations py-5" id="presta">
            <div className="container">
                {/* Titre */}
                <div className="text-center mb-5">
                    <h2 className="prestations-title fw-bold">Nos prestations</h2>
                    <p className="text-muted">
                        Des services de plomberie fiables et rapides, adaptés à vos besoins
                    </p>
                </div>

                {/* Cartes */}
                <div className="row g-4 justify-content-center">

                    {cardContent.map((content, index) => (
                        <div key = {index} className="col-12 col-md-6">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={content.img}
                                    className="card-img-top"
                                />
                                <div className="card-body text-center">
                                    <h5 className="prestations-title fw-bold">{content.name}</h5>
                                    <p className="text-muted">
                                        {content.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <ContactButtons />
                
            </div>
        </section>
  );
}

export default Prestation;