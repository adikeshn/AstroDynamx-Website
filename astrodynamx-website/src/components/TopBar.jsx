import "../styleSheets/topBar.css";

function TopBar({ shown }) {
  return (
    <div className={shown ? "topBar" : "fadeOut"}>
      <img className="topbarLogo" src="src/assets/LogoSide2.png" />
      <div className="selectorDiv">
        <span className="hover-underline-animation">Mission</span>
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
