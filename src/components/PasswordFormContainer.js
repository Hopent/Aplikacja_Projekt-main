import { useMemo } from "react";
import "./PasswordFormContainer.css";

const PasswordFormContainer = ({ credentialsInput, inputLabel, propTop }) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="haso-parent" style={frameDivStyle}>
      <div className="haso1">{credentialsInput}</div>
      <div className="frame5">
        <textarea className="rectangle1" />
        <div className="wprowad-swoje-haso">{inputLabel}</div>
      </div>
    </div>
  );
};

export default PasswordFormContainer;
