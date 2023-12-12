import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UkladSloneczny from "./pages/UkladSloneczny";
import EkranPowitalny from "./pages/EkranPowitalny";
import Ustawienia3 from "./pages/Ustawienia3";
import Ustawienia2 from "./pages/Ustawienia2";
import Ustawienia from "./pages/Ustawienia";
import Galeria1 from "./pages/Galeria1";
import Logowanie from "./pages/Logowanie";
import Rejestracja from "./pages/Rejestracja";
import PrzypomnijHaso from "./pages/PrzypomnijHaso";
import Home from "./pages/Home";
import KatalogPlanet from "./pages/KatalogPlanet";
import KatalogGwiazd from "./pages/KatalogGwiazd";
import Mapa from "./pages/Mapa";
import Menu from "./pages/Menu";
import Powiadomienia from "./pages/Powiadomienia";
import Kompas from "./pages/Kompas";
import Quiz1 from "./pages/Quiz1";
import Quiz from "./pages/Quiz";
import Wenus from "./pages/Wenus";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/UkladSloneczny":
        title = "";
        metaDescription = "";
        break;
      case "/ekran-powitalny":
        title = "";
        metaDescription = "";
        break;
      case "/ustawienia-3":
        title = "";
        metaDescription = "";
        break;
      case "/ustawienia-2":
        title = "";
        metaDescription = "";
        break;
      case "/ustawienia":
        title = "";
        metaDescription = "";
        break;
      case "/galeria":
        title = "";
        metaDescription = "";
        break;
      case "/logowanie":
        title = "";
        metaDescription = "";
        break;
      case "/rejestracja":
        title = "";
        metaDescription = "";
        break;
      case "/przypomnij-haso":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/katalog-planet":
        title = "";
        metaDescription = "";
        break;
      case "/katalog-gwiazd":
        title = "";
        metaDescription = "";
        break;
      case "/mapa":
        title = "";
        metaDescription = "";
        break;
      case "/menu":
        title = "";
        metaDescription = "";
        break;
      case "/powiadomienia":
        title = "";
        metaDescription = "";
        break;
      case "/kompas":
        title = "";
        metaDescription = "";
        break;
      case "/quiz-1":
        title = "";
        metaDescription = "";
        break;
      case "/quiz":
        title = "";
        metaDescription = "";
        break;
      case "/wenus":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
    <Routes>
      <Route path="/" element={<EkranPowitalny />}/>
      <Route path="/ekran-powitalny" element={<EkranPowitalny />} />
      <Route path="/ustawienia-3" element={<Ustawienia3 />} />
      <Route path="/ustawienia-2" element={<Ustawienia2 />} />
      <Route path="/ustawienia" element={<Ustawienia />} />
      <Route path="/galeria" element={<Galeria1 />} />
      <Route path="/logowanie" element={<Logowanie />} />
      <Route path="/rejestracja" element={<Rejestracja />} />
      <Route path="/przypomnij-haso" element={<PrzypomnijHaso />} />
      <Route path="/home" element={<Home />} />
      <Route path="/katalog-planet" element={<KatalogPlanet />} />
      <Route path="/katalog-gwiazd" element={<KatalogGwiazd />} />
      <Route path="/mapa" element={<Mapa />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/powiadomienia" element={<Powiadomienia />} />
      <Route path="/kompas" element={<Kompas />} />
      <Route path="/quiz-1" element={<Quiz1 />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/wenus" element={<Wenus />} />
      <Route path="/UkladSloneczny" element={<UkladSloneczny />} />
    </Routes>
    </>
  );
}
export default App;
