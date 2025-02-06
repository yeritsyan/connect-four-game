import LOGO from "../../assets/main-logo.png";
import CPUICON from "../../assets/cpu-icon.png";
import PLAYERICON from "../../assets/player-icon.png";
import { Link } from "react-router-dom";
import "./main.css";
import GenerateTitle from "../../utils/generateTitle";

const Main = ({ setCpu }) => {
  return (
    <div className="main__container buttons__container">
      <div className="main__content">
        <h1>{GenerateTitle()}</h1>
        <h2>untertitel</h2>
        <img src={LOGO} className="main__logo" alt="logo"></img>
        <Link
          to={"/game"}
          className="main__button button-pink"
          onClick={() => setCpu(true)}
        >
          PLAY VS CPU{" "}
          <img
            src={CPUICON}
            className="button__icon cpu-icon"
            alt="cpu icon"
          ></img>
        </Link>
        <Link
          to={"/game"}
          className="main__button button-yellow"
          onClick={() => setCpu(false)}
        >
          PLAY VS PLAYER{" "}
          <img
            src={PLAYERICON}
            className="button__icon player-icon"
            alt="player icon"
          ></img>
        </Link>
        <Link to={"/rules"} className="main__button button-withe">
          GAME RULES
        </Link>
      </div>
    </div>
  );
};

export { Main };
