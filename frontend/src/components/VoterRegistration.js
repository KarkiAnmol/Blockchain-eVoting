import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VoterRegistration.css";
import { ethers, providers } from "ethers";

import { useNavigate } from "react-router-dom";
// import { Web3Modal } from "@web3modal/react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { fetchContract } from "../context/Voter";
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";

// import WalletConnectProvider from "@walletconnect/web3-provider";
// import Fortmatic from "fortmatic";
// import dotenv from "dotenv";
// dotenv.config();

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
  const [web3Modal, setWeb3Modal] = useState(null);

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

    if (isVerified) {
      alert(
        "Verification Successful✅,now you will be registered on the blockchain"
      );
      navigate("/voting"); // navigate to the voting page

      //-----------------------------------
      //-----------------------------------

      // TODO: Implement voter registration logic using smart contract

      //Connecting smart contract

      const providerOptions = {
        // walletconnect: {
        //   package: WalletConnectProvider,
        //   options: {
        //     infuraId: process.env.INFURA_ID,
        //   },
        // },
        // fortmatic: {
        //   package: Fortmatic,
        //   options: {
        //     key: process.env.FORTMATIC_API_KEY,
        //   },
        // },
      };

      const web3Modal = new Web3Modal({
        // network: "mainnet", // optional
        // cacheProvider: true, // optional
        providerOptions, // required
      });

      const connection = await web3Modal.connect();
      // const provider

      // const web3 = new Web3(provider);

      console.log("the following object is here:  ");
      console.log(web3Modal);
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      console.log("contract:", contract);

      // const client = create();

      /* configure Infura auth settings */
      const projectId = "2OoInHAMMFhyet8kCoaOnEwyUeY";

      const projectSecret = "75229b2d8533c478eb558850795db1aa";
      const auth =
        "Basic " +
        Buffer.from(projectId + ":" + projectSecret).toString("base64");

      const client = create({
        host: "ipfs.infura.io",
        port: 5001,
        protocol: "https",
        headers: {
          authorization: auth,
        },
      });
      console.log("client:", client);
      const data = JSON.stringify({
        name,
        address,
        passportNumber,
        passportPhoto,
      });

      // console.log("data: ...", data);

      // const added = await client.add(data);
      /* upload the file */
      const added = await client.add(data);
      // console.log("addded: ", added);
      const url = `https://infura-ipfs.io/ipfs/${added.path}`;

      console.log("IPFS URI: ", url);

      //-----------------------------------
      //-----------------------------------
      //--------------
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
