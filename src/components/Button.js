import { useMemo } from "react";
import "./Button.css";

const Button = ({
  buttonText,
  property1Variant3Cursor,
  property1Variant3Border,
  property1Variant3Padding,
  property1Variant3BackgroundColor,
  property1Variant3Position,
  property1Variant3BoxShadow,
  property1Variant3Height,
  property1Variant3Top,
  property1Variant3Bottom,
  property1Variant3Left,
  rectangleDivBackgroundColor,
  rectangleDivBoxShadow,
  rectangleDivCursor,
  rectangleDivBorder,
  rectangleDivPadding,
  nextLeft,
  nextFontFamily,
  nextColor,
  nextDisplay,
  nextFontWeight,
  nextFontSize,
  onPrzyciskClick,
}) => {
  const property1Variant3Style = useMemo(() => {
    return {
      cursor: property1Variant3Cursor,
      border: property1Variant3Border,
      padding: property1Variant3Padding,
      backgroundColor: property1Variant3BackgroundColor,
      position: property1Variant3Position,
      boxShadow: property1Variant3BoxShadow,
      height: property1Variant3Height,
      top: property1Variant3Top,
      bottom: property1Variant3Bottom,
      left: property1Variant3Left,
    };
  }, [
    property1Variant3Cursor,
    property1Variant3Border,
    property1Variant3Padding,
    property1Variant3BackgroundColor,
    property1Variant3Position,
    property1Variant3BoxShadow,
    property1Variant3Height,
    property1Variant3Top,
    property1Variant3Bottom,
    property1Variant3Left,
  ]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
      boxShadow: rectangleDivBoxShadow,
      cursor: rectangleDivCursor,
      border: rectangleDivBorder,
      padding: rectangleDivPadding,
    };
  }, [
    rectangleDivBackgroundColor,
    rectangleDivBoxShadow,
    rectangleDivCursor,
    rectangleDivBorder,
    rectangleDivPadding,
  ]);

  const nextStyle = useMemo(() => {
    return {
      left: nextLeft,
      fontFamily: nextFontFamily,
      color: nextColor,
      display: nextDisplay,
      fontWeight: nextFontWeight,
      fontSize: nextFontSize,
    };
  }, [
    nextLeft,
    nextFontFamily,
    nextColor,
    nextDisplay,
    nextFontWeight,
    nextFontSize,
  ]);

  return (
    <div
      className="property-1variant3"
      style={property1Variant3Style}
      onClick={onPrzyciskClick}
    >
      <div className="property-1variant3-child" style={rectangleDivStyle} />
      <div className="next" style={nextStyle}>
        {buttonText}
      </div>
    </div>
  );
};

export default Button;
