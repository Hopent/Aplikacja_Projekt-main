import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Bottom_Navigation from "../components/Bottom_Navigation";
import "./Powiadomienia.css";

const Powiadomienia = () => {
  const navigate = useNavigate();

  const onZamknijIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="powiadomienia1">
      <div className="content">
        <div className="logowanie-z-nieznanego">
          Logowanie z nieznanego urządzenia
        </div>
        <div className="content-child" />
        <div className="logowanie-zakoczone-powodzeni">
          Logowanie zakończone powodzeniem
        </div>
        <div className="content-item" />
        <div className="content-inner" />
        <div className="kto-prbuje-zalogowa">
          Ktoś próbuje zalogować się do Twojego konta z...
        </div>
        <div className="udao-ci-si">
          Udało Ci się poprawnie zalogować do konta z u...
        </div>
        <div className="logowanie-zakoczone-powodzeni1">
          Logowanie zakończone powodzeniem
        </div>
        <div className="udao-ci-si1">
          Udało Ci się poprawnie zalogować do konta z u...
        </div>
        <img className="content-child1" alt="" src="/vector-14.svg" />
        <img className="content-child2" alt="" src="/vector-15.svg" />
        <img className="content-child3" alt="" src="/vector-16.svg" />
        <div className="filter" />
      </div>
      <div className="powiadomienia2">Powiadomienia</div>
      <img
        className="zamknij-icon2"
        alt=""
        src="/zamknij.svg"
        onClick={onZamknijIconClick}
      />

      <Bottom_Navigation />
    </div>
  );
};

export default Powiadomienia;
