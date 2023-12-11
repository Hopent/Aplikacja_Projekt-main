import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ContainerNewsy.css";

const ContainerNewsy = () => {
  const navigate = useNavigate();

  const onPrzyciskWyboruClick = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  return (
    <section className="newsy8">
      <div className="przycisk-wyboru1" onClick={onPrzyciskWyboruClick} />
      <b className="czytaj-dalej">Czytaj dalej</b>
      <img
        className="sign-out-squre-fill-icon7"
        alt=""
        src="/sign-out-squre-fill1.svg"
      />
      <div className="astronomowie-korzystajc-z-container">
        <p className="astronomowie-korzystajc-z">{`Astronomowie korzystając z `}</p>
        <p className="astronomowie-korzystajc-z">{`teleskopów NASA dokonali odkrycia `}</p>
        <p className="astronomowie-korzystajc-z">
          najbardziej odległej czarnej dziury,
        </p>
        <p className="astronomowie-korzystajc-z">{`która jest obserwowana w zakresie `}</p>
        <p className="astronomowie-korzystajc-z">{`rentgenowskim. Czarna dziura `}</p>
        <p className="astronomowie-korzystajc-z">{`znajduje się na wczesnym etapie `}</p>
        <p className="astronomowie-korzystajc-z">
          wzrostu, który dotychczas nie został
        </p>
        <p className="astronomowie-korzystajc-z">{`zaobserwowany, a jej masa jest `}</p>
        <p className="astronomowie-korzystajc-z">{`podobna do masy jej galaktyki `}</p>
        <p className="astronomowie-korzystajc-z">macierzystej.</p>
      </div>
      <b className="odkryto-odleg-czarn">Odkryto odległą czarną dziurę</b>
      <div className="nasacom">NASA.com</div>
      <div className="lis-20236">08 lis 2023</div>
    </section>
  );
};

export default ContainerNewsy;
