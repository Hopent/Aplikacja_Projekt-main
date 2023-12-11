import "./LoginFormCard.css";

const LoginFormCard = ({ inputLabel, loginInputLabel }) => {
  return (
    <div className="login-parent">
      <div className="login">{inputLabel}</div>
      <input className="rectangle2" type="text" />
      <div className="wprowad-swj-login1">{loginInputLabel}</div>
    </div>
  );
};

export default LoginFormCard;
