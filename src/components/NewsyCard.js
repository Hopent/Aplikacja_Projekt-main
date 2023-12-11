import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NewsyCard.css";

const NewsyCard = () => {
  const navigate = useNavigate();

  const onPrzyciskWyboruClick = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  return (
    <div className="newsy10">
      <div className="przycisk-wyboru3" onClick={onPrzyciskWyboruClick} />
      <b className="czytaj-dalej2">Czytaj dalej</b>
      <img
        className="sign-out-squre-fill-icon9"
        alt=""
        src="/sign-out-squre-fill1.svg"
      />
      <div className="teleskop-kosmiczny-hubble-container">
        <p className="teleskop-kosmiczny-hubble">
          Teleskop kosmiczny Hubble uchwycił obiecujące sygnały z odległej
          planety położonej w ekosferze gwiazdy podobnej do Słońca. Naukowcy
          sugerują, że warunki na tej planecie mogą być sprzyjające dla
          istnienia życia. Odkrycie to podkreśla znaczenie dalszych badań nad
        </p>
        <p className="teleskop-kosmiczny-hubble">
          ich potencjalnym zamieszkaniem.
        </p>
      </div>
      <b className="nowa-planeta">Nowa planeta</b>
      <div className="nasacom1">NASA.com</div>
      <div className="lis-20238">13 lis 2023</div>
    </div>
  );
};

export default NewsyCard;
