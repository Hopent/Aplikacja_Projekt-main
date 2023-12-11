import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Ustawienia2.css";

const Ustawienia2 = () => {
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
    <div className="ustawienia-2">
      <div className="grny-pasek-nawigacyjny2">
        <button className="ikona-powiadomie1" onClick={onIkonaPowiadomieClick}>
          <img
            className="ikona-powiadomie-inner"
            alt=""
            src="/rectangle-1.svg"
          />
          <div className="ellipse-div" />
        </button>
        <button className="ikona-wyszukiwarki1">
          <div className="ikona-wyszukiwarki-child1" />
          <div className="ikona-wyszukiwarki-child2" />
          <img
            className="ikona-wyszukiwarki-child3"
            alt=""
            src="/vector-109.svg"
          />
        </button>
      </div>
      <div className="edytuj-profil">Edytuj profil</div>
      <button className="zamknij1" onClick={onZamknijClick}>
        <img
          className="arrow-left-icon1"
          alt=""
          src="/arrow-left.svg"
          onClick={onArrowLeftIconClick}
        />
      </button>
      <img className="ustawienia-2-child" alt="" src="/ellipse-213@2x.png" />
      <div className="danka121">@danka12</div>
      <b className="danuta1">Danuta</b>
      <div className="nazwa-uytkownika">Nazwa użytkownika:</div>
      <img className="ustawienia-2-item" alt="" src="/vector-9.svg" />
      <div className="ustawienia-2-inner" />
      <div className="adres-e-mail">Adres e-mail:</div>
      <img className="ustawienia-2-child1" alt="" src="/vector-10.svg" />
      <img className="background-icon" alt="" src="/background.svg" />
      <img
        className="camera-plus-outline-icon"
        alt=""
        src="/cameraplusoutline.svg"
      />
      <div className="danutatukielcepl">danuta@tu.kielce.pl</div>
      <div className="haso">Hasło:</div>
      <img className="ustawienia-2-child2" alt="" src="/vector-10.svg" />
      <div className="div2">*****************</div>
      <button className="przyciski-wyboru2" onClick={onPrzyciskiWyboruClick}>
        <b className="zapisz-zmiany1">Zapisz zmiany</b>
        <img className="sign-out-squre-fill-icon2" alt="" src="/vector2.svg" />
      </button>
      <button className="przyciski-wyboru3" onClick={onPrzyciskiWyboru1Click}>
        <b className="zapisz-zmiany1">Anuluj</b>
        <img className="sign-out-squre-fill-icon3" alt="" src="/vector2.svg" />
      </button>
    </div>
  );
};

export default Ustawienia2;
