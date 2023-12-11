import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Ustawienia.css";

const Ustawienia = () => {
  const navigate = useNavigate();

  const onIkonaPowiadomieClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onZamknijClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/ustawienia-2");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/ustawienia-3");
  }, [navigate]);

  return (
    <div className="ustawienia">
      <div className="grny-pasek-nawigacyjny3">
        <button className="ikona-powiadomie2" onClick={onIkonaPowiadomieClick}>
          <img className="rectangle-icon" alt="" src="/rectangle-1.svg" />
          <div className="ikona-powiadomie-child1" />
        </button>
        <button className="ikona-wyszukiwarki2">
          <div className="ikona-wyszukiwarki-child4" />
          <div className="ikona-wyszukiwarki-child5" />
          <img
            className="ikona-wyszukiwarki-child6"
            alt=""
            src="/vector-109.svg"
          />
        </button>
      </div>
      <div className="ustawienia1">Ustawienia</div>
      <button className="zamknij2" onClick={onZamknijClick}>
        <img className="vector-icon1" alt="" src="/vector.svg" />
        <img className="vector-icon1" alt="" src="/vector1.svg" />
        <img className="vector-icon3" alt="" src="/vector2.svg" />
      </button>
      <div className="ustawienia-konta-parent">
        <b className="ustawienia-konta">Ustawienia konta</b>
        <button className="edytuj-profil-parent" onClick={onFrameButtonClick}>
          <div className="edytuj-profil1">Edytuj profil</div>
          <img className="vector-icon4" alt="" src="/vector3.svg" />
        </button>
        <button className="zmie-haso-parent" onClick={onFrameButton1Click}>
          <div className="edytuj-profil1">Zmień hasło</div>
          <img className="frame-child" alt="" src="/group-15.svg" />
        </button>
        <div className="powiadomienia-parent">
          <div className="powiadomienia">Powiadomienia</div>
          <img className="frame-item" alt="" src="/frame-20.svg" />
        </div>
        <img className="vector-icon5" alt="" src="/vector2.svg" />
      </div>
      <div className="o-aplikacji-parent">
        <b className="o-aplikacji">O aplikacji</b>
        <div className="wicej-o-nas-parent">
          <div className="powiadomienia">Więcej o nas...</div>
          <img className="vector-icon6" alt="" src="/vector2.svg" />
        </div>
        <div className="polityka-prywatnoci-parent">
          <div className="powiadomienia">Polityka prywatności</div>
          <img className="frame-inner" alt="" src="/group-151.svg" />
        </div>
        <div className="regulamin">Regulamin</div>
        <img className="vector-icon7" alt="" src="/vector2.svg" />
      </div>
    </div>
  );
};

export default Ustawienia;
