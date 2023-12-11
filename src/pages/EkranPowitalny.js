import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GalacticAtlasContainer from "../components/GalacticAtlasContainer";
import "./EkranPowitalny.css";

const EkranPowitalny = () => {
  const navigate = useNavigate();

  const onPrzyciskClick = useCallback(() => {
    navigate("/logowanie");
  }, [navigate]);

  return (
    <div className="ekran-powitalny">
      <div className="frame">
        <img className="frame-icon" alt="" src="/frame.svg" />
        <img className="frame-icon1" alt="" src="/frame1.svg" />
        <div className="frame1">
          <div className="maska-z-cieniem1" />
        </div>
      </div>
      <GalacticAtlasContainer />
    </div>
  );
};

export default EkranPowitalny;
