import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "./PrzypomnijHaso.css";

const PrzypomnijHaso = () => {
  const navigate = useNavigate();

  const onPrzyciskClick = useCallback(() => {
    navigate("/logowanie");
  }, [navigate]);

  const onArrowLeftClick = useCallback(() => {
    navigate("/logowanie");
  }, [navigate]);

  return (
    <div className="przypomnij-haso">
      <img className="maski-dla-ta1" alt="" src="/maski-dla-ta1.svg" />
      <div className="napisy">
        <div className="przypomnij-haso1">Przypomnij hasło</div>
        <Button
          buttonText="Przypomnij hasło"
          property1Variant3Cursor="pointer"
          property1Variant3Border="none"
          property1Variant3Padding="0"
          property1Variant3BackgroundColor="transparent"
          property1Variant3Position="relative"
          property1Variant3BoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          property1Variant3Height="3.38rem"
          property1Variant3Top="unset"
          property1Variant3Bottom="unset"
          property1Variant3Left="unset"
          rectangleDivBackgroundColor="2px solid #ffcb74"
          rectangleDivBoxShadow="0px 20px 60px rgba(255, 203, 116, 0.2)"
          rectangleDivCursor="unset"
          rectangleDivBorder="unset"
          rectangleDivPadding="unset"
          nextLeft="13.89%"
          nextFontFamily="Montserrat"
          nextColor="#fdfdfd"
          nextDisplay="inline-block"
          nextFontWeight="600"
          nextFontSize="14px"
          onPrzyciskClick={onPrzyciskClick}
        />
      </div>
      <div className="dolny-pasek-nawigacyjny4" />
      <section className="panel">
        <textarea className="rectangle" />
        <div className="wprowad-swj-login">Wprowadź swój login</div>
        <div className="na-twj-adres-container">
          <p className="na-twj-adres">{`Na twój adres e-mail zostanie przysłany link `}</p>
          <p className="na-twj-adres">umożliwiający ustawienie nowego hasła.</p>
        </div>
      </section>
      <nav className="arrow-left" onClick={onArrowLeftClick}>
        <img className="arrow-left-child" alt="" src="/vector-92.svg" />
      </nav>
    </div>
  );
};

export default PrzypomnijHaso;
