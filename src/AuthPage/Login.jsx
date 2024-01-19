import React, { useState, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import FirebaseInfo from "../../firebase-config";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, seterr] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    await signInWithEmailAndPassword(FirebaseInfo.auth, username, password)
      .then((userCreds) => {})
      .catch((error) => {
        seterr(true);
        error.code == "auth/network-request-failed"
          ? seterr("No connection")
          : seterr("Invalid credentials");
        setPassword("");
      });
    moniterAuthState();

    // Send login data to backend for authentication
    console.log("Username:", username, "Password:", password);
  };

  const googleSignin = () => {
    signInWithPopup(FirebaseInfo.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  };

  useEffect(() => {
    const moniterAuthState = async () => {
      await onAuthStateChanged(FirebaseInfo.auth, (users) => {
        if (users) {
          navigate("/home");
        }
      });
    };
    moniterAuthState();
  });

  return (
    <div className="outsideClass">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="logInButton">
            <button type="submit">Log in</button>
          </div>
        </form>
        <div className="ForgotPassword">
          <Link to="/forgotpw">
            <p>Forgot password?</p>
          </Link>
        </div>
        <div className="GoogleButton" onClick={googleSignin}>
          <div className="GoogleGPlusSignIn">
            <div className="customBtn">
              <img className="icon" src="GoogleLogo2.png" />
              <span className="buttonText"> Sign in with Google</span>
            </div>
          </div>
        </div>
        <div className="wrongPage">
          <br />
          <Link to="/signup">
            <p>Don't have an account? Create one here!</p>
          </Link>
        </div>
        {err != "" ? (
          <div className="errText">
            <span>{err}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Login;
