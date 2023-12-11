import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Top_Navigation from "../components/Top_Navigation";
import "./Quiz1.css";

const Quiz1 = () => {
  const navigate = useNavigate();

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);


  return (
    <div className="quiz-1">
      <div className="maska-z-cieniem12" />
      <img className="maski-dla-ta4" alt="" src="/maski-dla-ta2.svg" />
      <div className="maska-z-cieniem12" />
      <div className="kafelki2">
        <div className="pytanie-810">Pytanie 8/10</div>
        <div className="jak-nazywa-si">
          Jak nazywa się najjaśniejsza gwiazda na nocnym niebie?
        </div>
      </div>
      <button className="przyciski-wyboru9">
        <div className="nastpne-pytanie">Następne pytanie</div>
      </button>
      <div className="odpowiedzi">
        <div className="odpowiedz-1">
          <div className="betelgeza">Betelgeza</div>
        </div>
        <div className="odpowiedz-2">
          <div className="betelgeza">Syriusz</div>
        </div>
        <div className="odpowiedz-3">
          <div className="betelgeza">Wega</div>
        </div>
      </div>
      <div className="czas">
        <div className="czas-child" />
        <img className="czas-item" alt="" src="/ellipse-6.svg" />
        <div className="czas-inner" />
        <b className="b">23</b>
      </div>
      <div className="liczba-odpowiedzi">
        <b className="b1">04</b>
        <b className="b2">03</b>
        <div className="liczba-odpowiedzi-child" />
        <div className="liczba-odpowiedzi-item" />
      </div>
      <div className="quiz">Quiz</div>
      <Top_Navigation
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />
    </div>
  );
};

export default Quiz1;
