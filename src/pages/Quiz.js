import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Top_Navigation from "../components/Top_Navigation";
import "./Quiz.css";

const Quiz = () => {
  const navigate = useNavigate();

  const onIkonkaStronyGwnejClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onIkonkaKataloguClick = useCallback(() => {
    navigate("/katalog-planet");
  }, [navigate]);

  const onIkonkaMapyClick = useCallback(() => {
    navigate("/mapa");
  }, [navigate]);

  const onIkonkaGaleriiClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="quiz1">
      <div className="maska-z-cieniem14" />
      
      <img className="maski-dla-ta5" alt="" src="/maski-dla-ta2.svg" />
      <div className="przyciski-wyboru10">
        <div className="zagraj">Zagraj</div>
      </div>
      <div className="maska-z-cieniem14" />
      <div className="nasz-quiz-o">
        Nasz quiz o kosmosie to doskonała okazja, aby sprawdzić swoją wiedzę na
        temat gwiazd, planet, galaktyk i innych fascynujących fenomenów
        kosmicznych. Czy znasz nazwy największych planet naszego Układu
        Słonecznego? Czy potrafisz rozpoznać gwiazdozbiory na nocnym niebie?
        Przygotuj się na pytania z zakresu astronomii, kosmicznych odkryć i
        fascynujących faktów związanych z nieskończoną przestrzenią.
      </div>
      <div className="kafelki3">
        <div className="opis">Opis:</div>
        <div className="pyta-3-minuty">10 pytań 3 minuty</div>
        <div className="podstawowa-wiedza-na">
          Podstawowa wiedza na temat kosmosu
        </div>
      </div>
      <div className="quiz2">Quiz</div>
      <Top_Navigation
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />
    </div>
  );
};

export default Quiz;
