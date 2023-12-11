import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./GalacticAtlasContainer.css";

const GalacticAtlasContainer = () => {
  const navigate = useNavigate();

  const onPrzyciskClick = useCallback(() => {
    navigate("/logowanie");
  }, [navigate]);

  return (
    <div className="frame4">
      <div className="napisy1">
        <div className="galactic-atlas">Galactic Atlas</div>
        <div className="odkryj-z-nami">Odkryj z nami kosmos.</div>
      </div>
      <Button
        buttonText="Zaloguj się"
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
        nextLeft="23.89%"
        nextFontFamily="Montserrat"
        nextColor="#fdfdfd"
        nextDisplay="inline-block"
        nextFontWeight="600"
        nextFontSize="16px"
        onPrzyciskClick={onPrzyciskClick}
      />
    </div>
  );
};

export default GalacticAtlasContainer;
