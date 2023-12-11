import "./Bottom_Navigation.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Bottom_Navigation = () => {
  const navigate = useNavigate();

  const onIkonkaKataloguClick = useCallback(() => {
    navigate("/katalog-planet");
  }, [navigate]);

  const onIkonkaGaleriiClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  const onIkonkaMapyClick = useCallback(() => {
    navigate("/mapa");
  }, [navigate]);

  const onIkonkaHomeClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <section className="dolny-pasek-nawigacyjny10">
          <nav className="dolny-pasek-nawigacyjny9">
          <b className="home5">Home</b>
          <b className="katalog4">Katalog</b>
          <b className="galeria8">Galeria</b>
          <b className="mapa6">Mapa</b>
          <button className="ikonka-strony-gwnej4" onClick={onIkonkaHomeClick}>
            <img className="subtract-icon" alt="" src="/subtract.svg" />
          </button>
          <button className="ikonka-katalogu1" onClick={onIkonkaKataloguClick}>
            <img className="ikonka-katalogu-inner" alt="" src="/vector-58.svg" />
            <img className="ikonka-katalogu-child1" alt="" src="/vector-59.svg" />
          </button>
          <button className="ikonka-galerii1" onClick={onIkonkaGaleriiClick}>
            <img
              className="ikonka-galerii-child1"
              alt=""
              src="/rectangle-40171.svg"
            />
            <img
              className="ikonka-galerii-child2"
              alt=""
              src="/rectangle-40181.svg"
            />
            <img
              className="ikonka-galerii-child3"
              alt=""
              src="/rectangle-40191.svg"
            />
          </button>
          <button className="ikonka-mapy1" onClick={onIkonkaMapyClick}>
            <img className="ikonka-mapy-child1" alt="" src="/vector-326.svg" />
            <img className="ikonka-mapy-child2" alt="" src="/vector-327.svg" />
            <img className="ikonka-mapy-child3" alt="" src="/vector-328.svg" />
          </button>
        </nav>
    </section>
  );
};

export default Bottom_Navigation;
