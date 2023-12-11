import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Top_Navigation from "../components/Top_Navigation";
import Bottom_Navigation from "../components/Bottom_Navigation";
import "./KatalogPlanet.css";


const KatalogPlanet = () => {
  const navigate = useNavigate();

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onPrzyciskWyboruGwiazdyClick = useCallback(() => {
    navigate("/katalog-gwiazd");
  }, [navigate]);

  return (
    <div className="katalog-planet">
      <Top_Navigation
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />
      <div className="katalog-planet1">Katalog planet</div>
      <img className="maski-dla-ta2" alt="" src="/maski-dla-ta1.svg" />
      <div className="przyciski-wyboru7">
        <div className="planety1">
          <b className="planety2">Planety</b>
        </div>
        <div className="gwiazdy1">
          <div
            className="przycisk-wyboru-gwiazdy"
            onClick={onPrzyciskWyboruGwiazdyClick}
          />
          <b className="gwiazdy2">Gwiazdy</b>
        </div>
      </div>
      <div className="kafelki">
        <div className="faza-ksiyca">
          <div className="ukad-soneczny2">Układ słoneczny</div>
          <b className="wenus">Wenus</b>
          <div className="mln-km-od">108 mln km od Słońca</div>
          <img className="giphy-1-icon" alt="" src="/giphy-1@2x.png" />
        </div>
        <div className="faza-ksiyca">
          <img className="giphy-2-icon" alt="" src="/giphy-2@2x.png" />
          <div className="ukad-soneczny2">Układ słoneczny</div>
          <b className="mars">Mars</b>
          <div className="mln-km-od1">170 mln km od Słońca</div>
        </div>
        <div className="faza-ksiyca">
          <img className="giphy-4-icon" alt="" src="/giphy-4@2x.png" />
          <div className="ukad-soneczny4">Układ słoneczny</div>
          <b className="ziemia">Ziemia</b>
          <div className="mln-km-od2">150 mln km od Słońca</div>
        </div>
        <div className="faza-ksiyca">
          <img className="giphy-3-icon" alt="" src="/giphy-31@2x.png" />
          <div className="ukad-soneczny4">Układ słoneczny</div>
          <b className="merkury">Merkury</b>
          <div className="mln-km-od3">58 mln km od Słońca</div>
        </div>
      </div>
      <Bottom_Navigation />
    </div>
  );
};

export default KatalogPlanet;
