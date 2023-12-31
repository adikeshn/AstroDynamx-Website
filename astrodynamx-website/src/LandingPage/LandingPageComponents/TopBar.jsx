import "../LandingPageStyles/topBar.css";
import { Link } from "react-router-dom";

function TopBar({ shown, mission, team, contact, scrolltoSection, involved }) {
  return (
    <div className={shown ? "topBar" : "fadeOut"}>
      <img className="topbarLogo" src="src/assets/LogoSide2.png" />
      <div className="selectorDiv">
        <div
          onClick={() => {
            scrolltoSection(mission);
          }}
          className="hover-underline-animation"
        >
          Mission
        </div>
        <div
          onClick={() => {
            scrolltoSection(team);
          }}
          className="hover-underline-animation"
        >
          Our Team
        </div>
        <div
          onClick={() => {
            scrolltoSection(involved);
          }}
          className="hover-underline-animation"
        >
          Get Involved
        </div>
        <div
          onClick={() => {
            contact(true);
          }}
          className="hover-underline-animation"
        >
          Contact Us
        </div>
        <div className="signInBox">
          <Link to="/login" className="signInText">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
