import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Ustawienia3.css";

const Ustawienia3 = () => {
  const navigate = useNavigate();

  const onIkonaPowiadomieClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onZamknijClick = useCallback(() => {
    navigate("/ustawienia");
  }, [navigate]);

  const onArrowLeftIconClick = useCallback(() => {
    navigate("/ustawienia");
  }, [navigate]);

  const onPrzyciskiWyboruClick = useCallback(() => {
    navigate("/ustawienia");
  }, [navigate]);

  const onPrzyciskiWyboru1Click = useCallback(() => {
    navigate("/ustawienia");
  }, [navigate]);

  return (
    <div className="ustawienia-3">
      <div className="grny-pasek-nawigacyjny1">
        <button className="ikona-powiadomie" onClick={onIkonaPowiadomieClick}>
          <img
            className="ikona-powiadomie-child"
            alt=""
            src="/rectangle-1.svg"
          />
          <div className="ikona-powiadomie-item" />
        </button>
        <button className="ikona-wyszukiwarki">
          <div className="ikona-wyszukiwarki-child" />
          <div className="ikona-wyszukiwarki-item" />
          <img
            className="ikona-wyszukiwarki-inner"
            alt=""
            src="/vector-109.svg"
          />
        </button>
      </div>
      <div className="zmie-haso">Zmień hasło</div>
      <button className="zamknij" onClick={onZamknijClick}>
        <img
          className="arrow-left-icon"
          alt=""
          src="/arrow-left.svg"
          onClick={onArrowLeftIconClick}
        />
      </button>
      <img className="ustawienia-3-child" alt="" src="/ellipse-212@2x.png" />
      <div className="danka12">@danka12</div>
      <b className="danuta">Danuta</b>
      <div className="wprowad-obecne-haso">Wprowadź obecne hasło:</div>
      <img className="ustawienia-3-item" alt="" src="/vector-9.svg" />
      <div className="ustawienia-3-inner" />
      <div className="wprowad-nowe-haso">Wprowadź nowe hasło:</div>
      <img className="vector-icon" alt="" src="/vector-10.svg" />
      <div className="div">******************</div>
      <div className="potwierd-nowe-haso">Potwierdź nowe hasło:</div>
      <img className="ustawienia-3-child1" alt="" src="/vector-10.svg" />
      <div className="div1">*****************</div>
      <button className="przyciski-wyboru" onClick={onPrzyciskiWyboruClick}>
        <b className="zapisz-zmiany">Zapisz zmiany</b>
        <img className="sign-out-squre-fill-icon1" alt="" src="/vector2.svg" />
      </button>
      <button className="przyciski-wyboru1" onClick={onPrzyciskiWyboru1Click}>
        <b className="zapisz-zmiany">Anuluj</b>
      </button>
    </div>
  );
};

export default Ustawienia3;
