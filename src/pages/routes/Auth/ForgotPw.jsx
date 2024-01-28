import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import FirebaseInfo from "../../../../firebase-config";
import { useNavigate } from "react-router-dom";

import styles from "./Auth.module.scss";

function ForgotPw() {
  const [username, setUsername] = useState("");
  const [err, seterr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendPasswordResetEmail(FirebaseInfo.auth, username)
      .then(() => {
        alert("Email sent to " + username);
        navigate("/login");
      })
      .catch((err) => {
        seterr(err);
      });
  };

  return (
    <div className={styles["outsideClass"]}>
      <div className={styles["login-container"]}>
        <h2>Enter your email to reset password</h2>
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

          <div className={styles["logInButton"]}>
            <button type='submit'>Reset Password</button>
          </div>
        </form>

        {err != "" ? (
          <div className={styles["errText"]}>
            <span>{err}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ForgotPw;
