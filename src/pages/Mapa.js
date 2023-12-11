import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Bottom_Navigation from "../components/Bottom_Navigation";
import Top_Navigation from "../components/Top_Navigation";
import "./Mapa.css";


const Mapa = () => {
  const navigate = useNavigate();
  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="mapa3">
      <Top_Navigation
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />

      <img
        className="constellations-map-equ1110112-icon"
        alt=""
        src="/constellations-map-equ1110112-1@2x.png"
      />

      <div className="mapa4">Mapa</div>
      <Bottom_Navigation />
    </div>
  );
};

export default Mapa;
