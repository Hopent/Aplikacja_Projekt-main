import { useMemo } from "react";
import "./Top_Navigation.css";

const Top_Navigation = ({
  onIkonaPowiadomieIconClick,
  onIkonaMenuIconClick,
}) => {
  return (
    <div className="grny-pasek-nawigacyjny5">
      <b className="menu2">Menu</b>
      <img
        className="ikona-powiadomie-icon3"
        alt=""
        src="/ikona-powiadomie.svg"
        onClick={onIkonaPowiadomieIconClick}
      />
      <img
        className="ikona-menu-icon1"
        alt=""
        src="/ikona-menu.svg"
        onClick={onIkonaMenuIconClick}
      />
      <img
        className="ikona-wyszukiwarki-icon3"
        alt=""
        src="/ikona-wyszukiwarki.svg"
      />
    </div>
  );
};

export default Top_Navigation;
