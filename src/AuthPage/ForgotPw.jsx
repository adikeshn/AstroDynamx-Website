import React, { useState, useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import FirebaseInfo from "../../firebase-config";
import { useNavigate } from "react-router-dom";

function ForgotPw() {
  const [username, setUsername] = useState("");
  const [err, seterr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
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
    <div className="outsideClass">
      <div className="login-container">
        <h2>Enter your email to reset password</h2>
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

          <div className="logInButton">
            <button type="submit">Reset Password</button>
          </div>
        </form>

        {err != "" ? (
          <div className="errText">
            <span>{err}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ForgotPw;
