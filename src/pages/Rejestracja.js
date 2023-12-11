import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PasswordFormContainer from "../components/PasswordFormContainer";
import "./Rejestracja.css";

const Rejestracja = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onPrzyciskClick = useCallback(() => {
    if (password == password2 ) {
      navigate("/logowanie");
    } else {
      alert("Podany login jest juz zajety");
    }
  }, [password2, password, navigate]);

  const onZalogujSiClick = useCallback(() => {
    navigate("/logowanie");
  }, [navigate]);

  const onZamknijIconClick = useCallback(() => {
    navigate("/ekran-powitalny");
  }, [navigate]);

  return (
    <div className="rejestracja2">
      <div className="polityk-prywatnoci">Polityką prywatności</div>
      <div className="klikajc-w-poniszy">{`Klikając w poniższy przycisk zgadzasz się z naszą `}</div>
      <div className="przyciski-wyboru6">
        <button className="zaloguj-si3" onClick={onZalogujSiClick}>
          <b className="zaloguj-si4">Zaloguj się</b>
        </button>
        <button className="rejestracja3">
          <b className="rejestracja4">Rejestracja</b>
        </button>
      </div>
      <div className="rejestracja5">Rejestracja</div>
      <div className="dolny-pasek-nawigacyjny3" />
      <Button
        buttonText="Zarejestruj się"
        property1Variant3Cursor="pointer"
        property1Variant3Border="none"
        property1Variant3Padding="0"
        property1Variant3BackgroundColor="transparent"
        property1Variant3Position="absolute"
        property1Variant3BoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        property1Variant3Height="3.38rem"
        property1Variant3Top="40.63rem"
        property1Variant3Bottom="unset"
        property1Variant3Left="calc(50% - 90px)"
        rectangleDivBackgroundColor="2px solid #ffcb74"
        rectangleDivBoxShadow="0px 20px 60px rgba(255, 203, 116, 0.2)"
        rectangleDivCursor="unset"
        rectangleDivBorder="unset"
        rectangleDivPadding="unset"
        nextLeft="16.11%"
        nextFontFamily="Montserrat"
        nextColor="#fdfdfd"
        nextDisplay="inline-block"
        nextFontWeight="600"
        nextFontSize="16px"
        onPrzyciskClick={onPrzyciskClick}
      />
      <section className="panel-logowania">
        <PasswordFormContainer
              inputType="Text"
              credentialsInput="Login"
              inputLabel="Wprowadź swój Login"
              onInputChange={(value) => setLogin(value)}
              propTop="0rem"
        />
        <PasswordFormContainer
              inputType="Password"
              credentialsInput="Hasło"
              inputLabel="Wprowadź swoje hasło"
              onInputChange={(value) => setPassword(value)}
              propTop="6rem"
        />
        <PasswordFormContainer
              inputType="Password"
              credentialsInput="Potwierdz Hasło"
              inputLabel="Wprowadź ponownie swoje hasło"
              onInputChange={(value) => setPassword2(value)}
              propTop="12rem"
        />
      </section>
      <img
        className="zamknij-icon"
        alt=""
        src="/zamknij.svg"
        onClick={onZamknijIconClick}
      />
    </div>
  );
};

export default Rejestracja;
