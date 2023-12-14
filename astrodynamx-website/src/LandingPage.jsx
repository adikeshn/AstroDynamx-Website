import "./index.css";
import TopBar from "./components/TopBar";

function LandingPage() {
  return (
    <div className="screen">
      <div className="backgroundDiv">
        <TopBar />
        <div className="landingDiv">
          <h1 className="titleText">
            Fueling Dreams with STEM Tutoring and Rocketry
          </h1>
          <div className="getStartedBox">
            <h2 className="startedText">Get Started</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
