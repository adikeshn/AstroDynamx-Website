import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";

import styles from "./TopBar.module.scss";

function TopBar({ shown, mission, team, contact, scrolltoSection, involved }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const bar = () => {
    return (
      <div className={styles["selectorDiv"]}>
        <div
          onClick={() => {
            scrolltoSection(mission);
          }}
          className={styles["hover-underline-animation"]}
        >
          Mission
        </div>
        <div
          onClick={() => {
            scrolltoSection(team);
          }}
          className={styles["hover-underline-animation"]}
        >
          Our Team
        </div>
        <div
          onClick={() => {
            scrolltoSection(involved);
          }}
          className={styles["hover-underline-animation"]}
        >
          Get Involved
        </div>
        <div
          onClick={() => {
            contact(true);
          }}
          className={styles["hover-underline-animation"]}
        >
          Contact Us
        </div>
        <div className={styles["signInBox"]}>
          <Link
            to='/login'
            className={styles["signInText"]}
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <Link to='/'>
        <div className={shown ? styles["topBar"] : styles["fadeOut"]}>
          <img
            className={styles["topbarLogo"]}
            src='LogoSide2.png'
          />
          {bar()}
        </div>
      </Link>
      <div className={styles["hamburger-icon"]}>
        <img
          className={styles["topbarLogo2"]}
          src='LogoSide2.png'
        />

        <RiMenuFill
          size={46}
          color='white'
          className={styles["menuIcon"]}
          onClick={toggleSidebar}
        />
      </div>

      <Offcanvas
        show={!isSidebarCollapsed}
        placement='end'
        backdrop={false}
        onHide={() => {
          setIsSidebarCollapsed(true);
        }}
      >
        <Offcanvas.Header
          closeButton
          closeVariant='white'
        ></Offcanvas.Header>
        {bar()}
      </Offcanvas>
    </>
  );
}

export default TopBar;

//Replace my account with logout or finish dropdown menu
//Delete blog and forum links in the navbar
