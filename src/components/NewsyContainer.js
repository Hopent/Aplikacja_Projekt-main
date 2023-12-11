import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NewsyContainer.css";

const NewsyContainer = () => {
  const navigate = useNavigate();

  const onPrzyciskWyboruClick = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  return (
    <div className="newsy9">
      <div className="przycisk-wyboru2" onClick={onPrzyciskWyboruClick} />
      <b className="czytaj-dalej1">Czytaj dalej</b>
      <img
        className="sign-out-squre-fill-icon8"
        alt=""
        src="/sign-out-squre-fill1.svg"
      />
      <div className="europejski-satelita-badawczy-container">
        <p className="europejski-satelita-badawczy">
          Europejski satelita badawczy
        </p>
        <p className="europejski-satelita-badawczy">
          "Exploro" zbliża się do Jowisza,
        </p>
        <p className="europejski-satelita-badawczy">
          by przeprowadzić szczegółowe
        </p>
        <p className="europejski-satelita-badawczy">
          badania atmosfery giganta gazowego. Misja ma dostarczyć nowe dane na
          temat składu chmur, a także zjawisk atmosferycznych na tej tajemniczej
          planecie. Naukowcy
        </p>
        <p className="europejski-satelita-badawczy">
          spodziewają się, że to odkrycie
        </p>
        <p className="europejski-satelita-badawczy">
          zrewolucjonizuje naszą wiedzę.
        </p>
      </div>
      <b className="satelita-zblia-si">Satelita zbliża się do Jowisza</b>
      <div className="spacenewscom">SpaceNews.com</div>
      <div className="lis-20237">11 lis 2023</div>
    </div>
  );
};

export default NewsyContainer;
