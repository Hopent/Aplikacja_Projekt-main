import { useMemo } from "react";
import "./PasswordFormContainer.css";

const PasswordFormContainer = ({ credentialsInput, inputLabel, inputType, propTop, onInputChange }) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="haso-parent" style={frameDivStyle}>
      <div className="haso1">{credentialsInput}</div>
      <div className="frame5">
        <input
          type={inputType}
          placeholder={inputLabel}
          className="rectangle1"
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PasswordFormContainer;
