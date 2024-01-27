import "../LandingPageStyles/topBar.css";
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";

function TopBar({ shown, mission, team, contact, scrolltoSection, involved }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const bar = () => {
    return (
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
    );
  };

  return (
    <>
      <div className={shown ? "topBar" : "fadeOut"}>
        <img className="topbarLogo" src="LogoSide2.png" />
        {bar()}
      </div>
      <div className="hamburger-icon">
        <img className="topbarLogo2" src="LogoSide2.png" />

        <RiMenuFill
          size={46}
          color="white"
          className="menuIcon"
          onClick={toggleSidebar}
        />
      </div>

      <Offcanvas
        show={!isSidebarCollapsed}
        placement="end"
        backdrop={false}
        onHide={() => {
          setIsSidebarCollapsed(true);
        }}
      >
        <Offcanvas.Header closeButton closeVariant="white"></Offcanvas.Header>
        {bar()}
      </Offcanvas>
    </>
  );
}

export default TopBar;

//Replace my account with logout or finish dropdown menu
//Delete blog and forum links in the navbar