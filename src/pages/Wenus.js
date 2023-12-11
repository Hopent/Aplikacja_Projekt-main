import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PlanetCard1 from "../components/PlanetCard1";
import Top_Navigation from "../components/Top_Navigation";
import "./Wenus.css";

const Wenus = () => {
  const navigate = useNavigate();

  const onIkonkaStronyGwnejClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onIkonkaKataloguClick = useCallback(() => {
    navigate("/katalog-gwiazd");
  }, [navigate]);

  const onIkonkaGaleriiClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  const onIkonkaMapyClick = useCallback(() => {
    navigate("/mapa");
  }, [navigate]);

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onPrzyciskiWyboruContainerClick = useCallback(() => {
    navigate("/katalog-planet");
  }, [navigate]);

  return (
    <div className="wenus1">
      <div className="wenus2">Wenus</div>
      <img className="maski-dla-ta6" alt="" src="/maski-dla-ta3.svg" />
      <PlanetCard1 />
      <div
        className="przyciski-wyboru11"
        onClick={onPrzyciskiWyboruContainerClick}
      >
        <img
          className="sign-out-squre-fill-icon4"
          alt=""
          src="/sign-out-squre-fill2.svg"
        />
        <b className="powrt">Powrót</b>
      </div>
      <div className="dolny-pasek-nawigacyjny8">
      </div>
      <Top_Navigation
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />
    </div>
  );
};

export default Wenus;
