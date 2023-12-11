import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PasswordFormContainer from "../components/PasswordFormContainer";
import "./Logowanie.css";

const Logowanie = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onPrzyciskClick = useCallback(() => {
    if (login == password ) {
      navigate("/home");
    } else {
      alert("Nieprawidłowy login lub hasło");
    }
  }, [login, password, navigate]);

  const onZamknijClick = useCallback(() => {
    navigate("/ekran-powitalny");
  }, [navigate]);

  const onRejestracjaClick = useCallback(() => {
    navigate("/rejestracja");
  }, [navigate]);

  return (
    <div className="logowanie">
      <button className="zamknij3" autoFocus={true} onClick={onZamknijClick}>
        <img className="vector-icon8" alt="" src="/vector.svg" />
        <img className="vector-icon8" alt="" src="/vector1.svg" />
        <img className="vector-icon10" alt="" src="/vector2.svg" />
      </button>
      <div className="frame2" />
      <div className="frame2">
        <img className="maski-dla-ta" alt="" src="/maski-dla-ta.svg" />
        <div className="przyciski-wyboru5">
          <button className="zaloguj-si">
            <b className="zaloguj-si1">Zaloguj się</b>
          </button>
          <button className="rejestracja" onClick={onRejestracjaClick}>
            <b className="rejestracja1">Rejestracja</b>
          </button>
        </div>
        <div className="maska-z-cieniem2" />
        <Button
          buttonText="Zaloguj się"
          property1Variant3Cursor="pointer"
          property1Variant3Border="none"
          property1Variant3Padding="0"
          property1Variant3BackgroundColor="transparent"
          property1Variant3Position="absolute"
          property1Variant3BoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          property1Variant3Height="8.17%"
          property1Variant3Top="65.36%"
          property1Variant3Bottom="26.48%"
          property1Variant3Left="calc(50% - 90.45px)"
          rectangleDivBackgroundColor="2px solid #ffcb74"
          rectangleDivBoxShadow="0px 20px 60px rgba(255, 203, 116, 0.2)"
          rectangleDivCursor="pointer"
          rectangleDivBorder="none"
          rectangleDivPadding="0"
          nextLeft="23.89%"
          nextFontFamily="Montserrat"
          nextColor="#fdfdfd"
          nextDisplay="inline-block"
          nextFontWeight="600"
          nextFontSize="16px"
          onPrzyciskClick={onPrzyciskClick}
        />
        <div className="zaloguj-si2">Zaloguj się</div>
        
        <div className="panel-logowania1">
          <div className="zapomniae-hasa">Zapomniałeś hasła?</div>
            <PasswordFormContainer
              inputType="Password"
              credentialsInput="Hasło"
              inputLabel="Wprowadź swoje hasło"
              onInputChange={(value) => setPassword(value)}
            />
            <PasswordFormContainer
              inputType="Text"
              credentialsInput="Login"
              inputLabel="Wprowadź swój login"
              onInputChange={(value) => setLogin(value)}
              propTop="0rem"
            />
         </div>
      </div>
    </div>
  );
};

export default Logowanie;
