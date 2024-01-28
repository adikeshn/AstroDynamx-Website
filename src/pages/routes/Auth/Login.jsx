import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import FirebaseInfo from "../../../../firebase-config";
import { useNavigate } from "react-router-dom";

import styles from "./Auth.module.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, seterr] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  const googleSignin = () => {
    signInWithPopup(FirebaseInfo.auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        seterr(error.message);
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
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
    <div className={styles["outsideClass"]}>
      <div className={styles["login-container"]}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label htmlFor='username'>Email:</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles["logInButton"]}>
            <button type='submit'>Log in</button>
          </div>
        </form>
        <div className={styles["ForgotPassword"]}>
          <Link to='/forgotpw'>
            <p>Forgot password?</p>
          </Link>
        </div>
        <div
          className={styles["GoogleButton"]}
          onClick={googleSignin}
        >
          <div className={styles["GoogleGPlusSignIn"]}>
            <div className={styles["customBtn"]}>
              <img
                className={styles["icon"]}
                src='GoogleLogo2.png'
              />
              <span className={styles["buttonText"]}> Sign in with Google</span>
            </div>
          </div>
        </div>
        <div className={styles["wrongPage"]}>
          <br />
          <Link to='/signup'>
            <p>Don&apos;t have an account? Create one here!</p>
          </Link>
        </div>
        {err != "" ? (
          <div className={styles["errText"]}>
            <span>{err}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Login;
