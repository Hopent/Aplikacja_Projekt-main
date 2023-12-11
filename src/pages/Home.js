import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormPanel from "../components/FormPanel";
import ContainerNewsy from "../components/ContainerNewsy";
import NewsyContainer from "../components/NewsyContainer";
import NewsyCard from "../components/NewsyCard";
import Bottom_Navigation from "../components/Bottom_Navigation";
import Top_Navigation from "../components/Top_Navigation";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onIkonaPowiadomieIconClick = useCallback(() => {
    navigate("/powiadomienia");
  }, [navigate]);

  const onIkonaMenuIconClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  return (
    <div className="home3">
      <Top_Navigation
        onIkonaPowiadomieIconClick={onIkonaPowiadomieIconClick}
        onIkonaMenuIconClick={onIkonaMenuIconClick}
      />
      <FormPanel />
      <h1 className="witaj-user">Witaj, user</h1>
      <main className="newsy6">
        <ContainerNewsy />
        <NewsyContainer />
        <NewsyCard />
      </main>
      <Bottom_Navigation />
    </div>
  );
};

export default Home;
