import React, { useState } from "react"; // Import React and useState hook for state management
import { Link } from "react-router-dom"; // Import Link from react-router-dom for routing

function LoginPage() {
  const [email, setEmail] = useState(""); // Initialize email state to empty string
  const [password, setPassword] = useState(""); // Initialize password state to empty string

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
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
      </form>
      <div>
        Don't have an account? <Link to="/register">Register here</Link>
        {/* Link to registration page */}
      </div>
    </div>
  );
}

export default LoginPage;
