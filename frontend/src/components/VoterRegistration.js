import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VoterRegistration.css";

import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  // Define state variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data1 = {
      name: name,
      passportNumber: passportNumber,
      dateOfBirth: dateOfBirth,
    };
    // console.log(formData);

    // Make a POST request to the backend to verify the voter's information
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    });

    const responseData = await response.json();
    const isVerified = responseData.verified;

    // If voter is verified, proceed with registration
    // console.log("about to verify");
    if (isVerified) {
      alert(
        "Verification Successful✅,now you will be registered on the blockchain"
      );
      navigate("/voting"); // navigate to the voting page

      // TODO: Implement voter registration logic using smart contract
    } else {
      alert(
        "Verification failed. Please check your information and try again."
      );
    }
  };

  // Handle passport photo upload
  const handlePassportPhotoChange = (event) => {
    setPassportPhoto(event.target.files[0]);
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Voter Registration</h1>

      <form onSubmit={handleSubmit} className="register-form">
        {/* Name field */}
        <div className="name-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email field */}
        <div className="email-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password field */}
        <div className="password-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Address field */}
        <div className="address-field">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {/* Passport number field */}
        <div className="passport-field">
          <label htmlFor="passportNumber">Passport Number:</label>
          <input
            type="text"
            id="passportNumber"
            value={passportNumber}
            onChange={(e) => setPassportNumber(e.target.value)}
            required
          />
        </div>

        {/* Passport photo upload field */}
        <div className="photo-field">
          <label htmlFor="passportPhoto">Passport Photo:</label>
          <input
            type="file"
            id="passportPhoto"
            accept="image/*"
            onChange={handlePassportPhotoChange}
            required
          />
        </div>

        {/* Date of birth field */}
        <div className="dob-field">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
      <div className="last-login-field">
        Already have an account? <Link to="/login">Login here</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
