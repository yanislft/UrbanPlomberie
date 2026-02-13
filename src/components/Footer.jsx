import UpLogo from "../assets/logo/upLogo1White.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="row">

          <div className="col-12 col-md-4 footer-col text-center text-md-start">
            <img src={UpLogo} className="footer-logo mb-3" alt="Urban Plomberie" />
            <p>
              Dépannage, installation et entretien de vos équipements de plomberie.
              Intervention rapide et travail soigné.
            </p>
          </div>

          <div className="col-12 col-md-4 footer-col text-center text-md-start">
            <h4>Contact</h4>
            <ul>
              <li>Cavaillon & alentours</li>
              <li>07 79 43 29 85</li>
              <li>faridridouh1@gmail.com</li>
            </ul>
          </div>

          <div className="col-12 col-md-4 footer-col text-center text-md-start">
            <h4>Liens utiles</h4>
            <ul>
              <li><a href="/#presta">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/mentionslegales">Mentions légales</a></li>
            </ul>
          </div>

        </div>

      </div>

      <div className="footer-bottom text-center">
        <p>© {new Date().getFullYear()} Urban Plomberie — Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;