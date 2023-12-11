import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Top_Navigation from "../components/Top_Navigation";
import Bottom_Navigation from "../components/Bottom_Navigation";
import "./Kompas.css";

const Kompas = () => {
  const navigate = useNavigate();

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="kompas">
      <div className="kompas1">Kompas</div>
      <Top_Navigation
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />





      <Bottom_Navigation />
    </div>
  );
};

export default Kompas;
