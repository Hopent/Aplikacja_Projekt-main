import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordFormContainer from "../components/PasswordFormContainer";
import "./Ustawienia3.css";

const Ustawienia3 = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");//obecne
  const [password2, setPassword2] = useState("");//nowe
  const [password3, setPassword3] = useState("");//potwierdz

  const onIkonaPowiadomieClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onZamknijClick = useCallback(() => {
    navigate("/ustawienia");
  }, [navigate]);

  const onArrowLeftIconClick = useCallback(() => {
    navigate("/ustawienia");
  }, [navigate]);

  const onPrzyciskiWyboru1Click = useCallback(() => {
    navigate("/ustawienia");
  }, [navigate]);

  const onPrzyciskiWyboruClick = useCallback(() => {
    if (password2 == password3 && password == password/*tutaj porownanie z bazą */) {
      navigate("/ustawienia");
    } else {
      alert("Hasła nie są takie same");
    }
  }, [password2, password3, navigate]);

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
      <div className="wprowad-obecne-haso">Wprowadź obecne hasło:
      <PasswordFormContainer
              inputType="Password"
              credentialsInput=""
              inputLabel="Wprowadź obecne hasło"
              onInputChange={(value) => setPassword(value)}
              propTop="0rem"
      />
      </div>
      <div className="wprowad-nowe-haso">Wprowadź nowe hasło:
      <PasswordFormContainer
              inputType="Password"
              credentialsInput=""
              inputLabel="Wprowadź nowe hasło"
              onInputChange={(value) => setPassword2(value)}
              propTop="0rem"
      />
      </div>
      <img className="vector-icon" alt="" src="/vector-10.svg" />
      <div className="potwierd-nowe-haso">Potwierdź nowe hasło:
      <PasswordFormContainer
              inputType="Password"
              credentialsInput=""
              inputLabel="Potwierdź nowe hasło"
              onInputChange={(value) => setPassword3(value)}
              propTop="0rem"
      />
      </div>
      <img className="ustawienia-3-child1" alt="" src="/vector-10.svg" />
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
