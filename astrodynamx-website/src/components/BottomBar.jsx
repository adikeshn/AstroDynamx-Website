import { useState } from "react";
import "../styleSheets/bottombar.css";
import { RiInstagramLine } from "react-icons/ri";

function BottomBar() {
  const style = { color: "white", fontSize: "1.5em" };
  const [insta, setInsta] = useState(false);

  return (
    <div className="bottom-div">
      <div className="icon-div">
        <div className="insta-icon">
          <RiInstagramLine
            size={46}
            color="white"
            onClick={() => {
              window.open("https://www.instagram.com/astrodynamx/", "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
