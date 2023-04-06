import React, { useState } from "react"; // Import React and useState hook for state management
import { Link } from "react-router-dom"; // Import Link from react-router-dom for routing
import "./VoterLogin.css";

function LoginPage() {
  const [email, setEmail] = useState(""); // Initialize email state to empty string
  const [password, setPassword] = useState(""); // Initialize password state to empty string

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <div>
      <h1 className="login-title">Login</h1>
      <Link to={"/register"} className="registerButton-top">
        Register
      </Link>
      {/* <button type="Submit" className="registerButton-top" onClick="/Register">
        Register
      </button> */}
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Bind email state to input value and update state on input change */}
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Bind password state to input value and update state on input change */}
        </label>
        <button type="submit">Login</button>
        <div className="loginToRegister">
          Don't have an account? <Link to="/register">Register here</Link>
          {/* Link to registration page */}
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
