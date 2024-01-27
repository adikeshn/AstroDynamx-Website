import FirebaseInfo from "../../../firebase-config";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

  const signout = async () => {
    await FirebaseInfo.auth.signOut();
    navigate("/");
  };

  return <button onClick={signout}>hello world</button>;
}

export default HomePage;
