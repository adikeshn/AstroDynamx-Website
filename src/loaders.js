
import { redirect } from "react-router-dom";
import FirebaseInfo from "../firebase-config.js";

const Homeloader = () => {
    console.log(FirebaseInfo.auth.currentUser)
    if (FirebaseInfo.auth.currentUser == null) {
      return redirect("/");
    }
    return null;
  };


const loaders = {
    Homeloader, 
}

export default loaders
