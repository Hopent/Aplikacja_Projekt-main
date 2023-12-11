import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FormPanel.css";

const FormPanel = () => {
  const navigate = useNavigate();

  const onPrzyciskWyboruClick = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  return (
    <section className="panele">
      <div className="faza-ksiyca8">
        <div className="kafelek6" />
        <img className="giphy-3-icon2" alt="" src="/giphy-3@2x.png" />
        <div className="zanikajcy-735-widocznoci-container">
          <p className="zanikajcy">Zanikający</p>
          <p className="zanikajcy">7.35% widoczności</p>
          <p className="zanikajcy">399247.71 km od Ziemi</p>
          <p className="zanikajcy">Wiek wynosi 27 dni</p>
        </div>
        <div className="faza-ksiyca9">Faza księżyca</div>
      </div>
      <div className="ranking">
        <div className="kafelek7" />
        <input
          className="przycisk-wyboru"
          type="text"
          onClick={onPrzyciskWyboruClick}
        />
        <b className="przejd-do-quizu">Przejdź do quizu</b>
        <img
          className="sign-out-squre-fill-icon6"
          alt=""
          src="/sign-out-squre-fill.svg"
        />
        <b className="punktw-200-punktw-container">
          <p className="zanikajcy">220 punktów</p>
          <p className="zanikajcy">200 punktów</p>
          <p className="zanikajcy">180 punktów</p>
          <p className="zanikajcy">170 punktów</p>
          <p className="zanikajcy">165 punktów</p>
        </b>
        <div className="poker-gabriel12-maxas-container">
          <ul className="poker-gabriel12-maxas-monik-mi">
            <li className="poker">Poker</li>
            <li className="poker">Gabriel12</li>
            <li className="poker">maxas</li>
            <li className="poker">Monik</li>
            <li>Mieszko1</li>
          </ul>
        </div>
        <div className="ranking-w-quizie">Ranking w quizie</div>
      </div>
      <div className="newsy7">Newsy</div>
    </section>
  );
};

export default FormPanel;
