import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Import here  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== verifyPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
  
    // Passwords match and are valid, proceed with submission
    console.log("Username:", username, "Password:", password);
    // Send login data to backend for authentication
    //e.target.reset();
    setErrorMessage("");
    setUsername("");
    setPassword("");
    setVerifyPassword("");
  };
  
    return (
        <div className="outsideClass">
            <div className="login-container">
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
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
                  <div className="form-group">
                    <label htmlFor="verifyPassword">Verify Password:</label>
                    <input
                      type="password"
                      id="verifyPassword"
                      value={verifyPassword}
                      onChange={(e) => setVerifyPassword(e.target.value)}
                    />
                  </div>
                  {errorMessage && <div className="error">{errorMessage}</div>}
                  <div className="logInButton">
                    <button type="submit">Sign Up</button>
                  </div>
                </form>
                <div className="GoogleButton">
                    <br />
                    <div className="GoogleGPlusSignIn">
                        <div className="customBtn">
                            <img className="icon" src="src/assets/GoogleLogo2.png"/>
                            <span className="buttonText"> Sign up with Google</span>
                        </div>
                    </div>
                </div>
                <div className="wrongPage">
                    <Link to="/login">
                        <br />
                        <p>Already have an account? Sign in here</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;