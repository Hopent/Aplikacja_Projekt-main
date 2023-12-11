import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SettingsForm.css";

const SettingsForm = () => {
  const navigate = useNavigate();

  const onWylogujClick = useCallback(() => {
    navigate("/ekran-powitalny");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/ustawienia");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/kompas");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onFrame2Click = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  const onFrame3Click = useCallback(() => {
    navigate("/mapa");
  }, [navigate]);

  const onFrame4Click = useCallback(() => {
    navigate("/katalog-planet");
  }, [navigate]);

  const onFrame5Click = useCallback(() => {
    navigate("/UkladSloneczny");
  }, [navigate]);

  return (
    <div className="menu6">
      <div className="frame6">
        <button className="wyloguj" onClick={onWylogujClick}>
          <div className="wyloguj-si">Wyloguj się</div>
        </button>
      </div>
      <button className="frame7" onClick={onFrameClick}>
        <div className="ustawienia2">Ustawienia</div>
      </button>
      <div className="frame8" onClick={onFrameContainer1Click}>
        <div className="kompas2">
          <div className="kompas3">Kompas</div>
        </div>
      </div>
      <button className="frame9" onClick={onFrame5Click}>
        <div className="ukad">
          <img className="ukad-icon" alt="" src="/ukad.svg" />
          <div className="ukad-soneczny6">Układ słoneczny</div>
        </div>
      </button>
      <button className="frame10" onClick={onFrame2Click}>
        <div className="galeria9">
          <img
            className="ikonka-galerii-icon3"
            alt=""
            src="/ikonka-galerii2.svg"
          />
          <div className="galeria10">Galeria</div>
        </div>
      </button>
      <button className="frame11" onClick={onFrame3Click}>
        <div className="mapa7">
          <img className="ikonka-mapy-icon4" alt="" src="/ikonka-mapy3.svg" />
          <div className="mapa8">Mapa</div>
        </div>
      </button>
      <button className="frame12" onClick={onFrame4Click}>
        <div className="katalog5">
          <img
            className="ikonka-mapy-icon4"
            alt=""
            src="/ikonka-katalogu2.svg"
          />
          <div className="katalog6">Katalog</div>
        </div>
      </button>
      <button className="frame13" onClick={onFrame1Click}>
        <div className="home6">
          <img
            className="ikonka-mapy-icon4"
            alt=""
            src="/ikonka-strony-gwnej1.svg"
          />
          <div className="home7">Home</div>
        </div>
      </button>
    </div>
  );
};

export default SettingsForm;
