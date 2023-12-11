import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Top_Navigation from "../components/Top_Navigation";
import Bottom_Navigation from "../components/Bottom_Navigation";
import "./KatalogGwiazd.css";

const KatalogGwiazd = () => {
  const navigate = useNavigate();

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onPrzyciskWyboruPlanetyClick = useCallback(() => {
    navigate("/katalog-planet");
  }, [navigate]);

  return (
    <div className="katalog-gwiazd">
      <Top_Navigation
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />
      <div className="katalog-gwiazd1">Katalog gwiazd</div>
      <img className="maski-dla-ta3" alt="" src="/maski-dla-ta1.svg" />
      <div className="przyciski-wyboru8">
        <div className="planety3">
          <div
            className="przycisk-wyboru-planety"
            onClick={onPrzyciskWyboruPlanetyClick}
          />
          <b className="planety4">Planety</b>
        </div>
        <div className="gwiazdy3">
          <b className="gwiazdy4">Gwiazdy</b>
        </div>
      </div>
      <div className="kafelki1">
        <div className="faza-ksiyca4">
          <div className="gwiazdozbir-agla">Gwiazdozbiór Żagla</div>
          <b className="delta-velorum">Delta Velorum</b>
          <div className="ly-od-soca">81 ly od Słońca</div>
          <img className="giphy-1-icon1" alt="" src="/giphy-11@2x.png" />
        </div>
        <div className="faza-ksiyca4">
          <div className="gwiazdozbir-agla">Gwiazdozbiór Żagla</div>
          <b className="suhail">Suhail</b>
          <div className="ly-od-soca1">454 ly od Słońca</div>
          <img className="giphy-2-icon1" alt="" src="/giphy-21@2x.png" />
        </div>
        <div className="faza-ksiyca4">
          <div className="gwiazdozbir-psa">Gwiazdozbiór Psa</div>
          <b className="syriusz">Syriusz</b>
          <div className="ly-od-soca2">8,6 ly od Słońca</div>
          <img className="giphy-3-icon1" alt="" src="/giphy-32@2x.png" />
        </div>
        <div className="faza-ksiyca4">
          <div className="gwiazdozbir-wolarza">Gwiazdozbiór Wolarza</div>
          <b className="akrtur">Akrtur</b>
          <div className="ly-od-od">37 ly od od Słońca</div>
          <img className="giphy-4-icon1" alt="" src="/giphy-41@2x.png" />
        </div>
      </div>
      <Bottom_Navigation />
    </div>
  );
};

export default KatalogGwiazd;
