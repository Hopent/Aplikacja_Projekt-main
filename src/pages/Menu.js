import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SettingsForm from "../components/SettingsForm";
import "./Menu.css";

const Menu = () => {
  const navigate = useNavigate();
  const onZamknijIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);


  return (
    <div className="menu3">
      <img className="menu-child" alt="" src="/ellipse-212@2x.png" />
      <div className="danka122">@danka12</div>
      <b className="danuta2">Danuta</b>
      <div className="menu4">Menu</div>
      <SettingsForm />
      <img
        className="zamknij-icon1"
        alt=""
        src="/zamknij.svg"
        onClick={onZamknijIconClick}
      />
    </div>
  );
};

export default Menu;
