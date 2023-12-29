import React, { useState, useEffect } from "react";
import "../styleSheets/bottombar.css";
import { RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";

function BottomBar() {
  //This is for the get involved popup
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = (event) => {
    // Close the popup only if the click is outside the popup or the show button
    if (
      !event.target.closest(".popup") &&
      !event.target.closest("#popup-button")
    ) {
      setShowPopup(false);
    } else if (event.target.closest("#close-button")) {
      setShowPopup(false);
    }
  };
  function handleKeyDown(event) {
    if (event.key === "Escape" && showPopup) {
      setShowPopup(false);
    }
  }
  useEffect(() => {
    // Add event listener to close the popup on outside clicks
    document.addEventListener("click", handleClosePopup);
    //Adds listener for the escape key press
    document.addEventListener("keydown", handleKeyDown);
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClosePopup);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bottom-div">
      <div className="get-involved">
        <button id="popup-button" onClick={handleShowPopup}>
          <u>Get Involved</u>
        </button>
        {showPopup && (
          <div className="popup">
            <h2>Join Us!</h2>
            <p>
              Click
              <a href="https://discord.gg/BK5bTCpvRD" target="blank">
                {" "}
                here{" "}
              </a>
              to join our discord!
            </p>
            <button id="close-button" onClick={handleClosePopup}>
              &times;
            </button>
          </div>
        )}
      </div>
      <div className="icon-div">
        <RiInstagramLine
          size={46}
          color="white"
          onClick={() => {
            window.open("https://www.instagram.com/astrodynamx/", "_blank");
          }}
          className="icon-cursor"
        />
        <RiLinkedinBoxLine
          size={46}
          color="white"
          className="icon-cursor"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/company/astrodynamx/about/?viewAsMember=true",
              "_blank"
            );
          }}
        />
      </div>
      <div className="space-corrcter"></div>
    </div>
  );
}

export default BottomBar;
