import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Bottom_Navigation from "../components/Bottom_Navigation";
import Top_Navigation from "../components/Top_Navigation";
import "./Galeria1.css";

const Galeria1 = () => {
  const navigate = useNavigate();
  
  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="galeria2">
      <Top_Navigation
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />
      <div className="galeria4">Galeria</div>
      <div className="galeria5">
        <div className="zdjcie">
          <img className="gwne-icon" alt="" src="/gwne@2x.png" />
          <div className="przyciski-wyboru4">
            <button className="gwiazdy">
              <div className="gwiazdy-child" />
              <img
                className="arrow-alt-lright-icon"
                alt=""
                src="/arrow-alt-lright.svg"
              />
            </button>
            <button className="planety">
              <div className="gwiazdy-child" />
              <img
                className="arrow-alt-left-icon"
                alt=""
                src="/arrow-alt-left.svg"
              />
            </button>
          </div>
        </div>
        <div className="newsy5">
          <div className="kafelek5" />
          <div className="na-zdjciu-moemy5">
            Na zdjęciu możemy podziwiać spiralną galaktykę znaną jako NGC 1232.
            Znajduje się w gwiazdozbiorze Erydanu, około 65 milionów lat
            świetlnych od naszej Ziemi. Jej wirujące ramiona składają się z
            setek miliardów gwiazd, a w centrum widoczne jest jasne jądro, gdzie
            gromadzą się gęste skupiska gwiazd.
          </div>
          <b className="o-zdjciu5">O zdjęciu</b>
          <div className="fot-nasacom5">Fot: NASA.com</div>
          <div className="lis-20235">08 lis 2023</div>
        </div>
      </div>
      <Bottom_Navigation />
    </div>
  );
};

export default Galeria1;
