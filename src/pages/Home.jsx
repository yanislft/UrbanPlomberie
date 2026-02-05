import Hero from '../sections/Hero';
import About from '../sections/About';
import Prestation from '../sections/Prestation';
import Chantiers from '../sections/Chantiers';
import GoogleReviews from '../sections/GoogleReviews';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {

  const location = useLocation();
  const navigate = useNavigate();

useEffect(() => {
  if (!location.hash) return;

  const targetId = location.hash.replace("#", "");
  let tries = 0;

  const tryScroll = () => {
    const el = document.getElementById(targetId);
    const navbar = document.getElementById("main-navbar");

    if (el) {
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarHeight - 10, 
        behavior: "smooth",
      });

      return;
    }

    if (tries < 30) {
      tries++;
      setTimeout(tryScroll, 50);
    }
  };

  tryScroll();
}, [location.hash]);

  return (
    <>
      {<Hero /> }
      {<About />}
      {<Prestation />}
      {<Chantiers />}
      {<GoogleReviews />}
    </>
  );
}

export default Home;