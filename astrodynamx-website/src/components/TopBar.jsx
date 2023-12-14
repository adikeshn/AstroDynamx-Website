import "../index.css";

function TopBar() {
  return (
    <div className="topBar">
      <img className="topbarLogo" src="src/assets/LogoSide2.png" />
      <div className="selectorDiv">
        <span className="selectorStyle">Mission</span>
        <span className="selectorStyle">Our Team</span>
        <span className="selectorStyle">Get Involved</span>
        <span className="selectorStyle">Contact Us</span>
        <div className="signInBox">
          <span className="signInText">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
