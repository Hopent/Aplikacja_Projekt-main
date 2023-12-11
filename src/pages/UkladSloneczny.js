import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Top_Navigation from "../components/Top_Navigation";
import Uklad_sloneczny from "../components/Uklad_Sloneczny_APP";
import "./UkladSloneczny.css";

const UkladSloneczny = () => {
  const navigate = useNavigate();

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="background">
      <Top_Navigation
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />
      <Uklad_sloneczny/>
      <div className="tittle">Układ słoneczny</div>
      <div className="text_under">
        <p className="nacinij-na-planet">
          Naciśnij na planetę, aby poznać więcej szczegółów.
        </p>
        <p className="nacinij-na-planet">
          Przeciągnij dwoma palcami, aby przybliżyć.
        </p>
      </div>
    </div>
  );
};

export default UkladSloneczny;
