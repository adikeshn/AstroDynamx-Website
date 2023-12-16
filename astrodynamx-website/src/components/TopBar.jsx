import "../styleSheets/topBar.css";

function TopBar({ shown, mission, team, involve, contact, scrolltoSection }) {
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
        <span className="hover-underline-animation">Our Team</span>
        <span className="hover-underline-animation">Get Involved</span>
        <span className="hover-underline-animation">Contact Us</span>
        <div className="signInBox">
          <span className="signInText">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
