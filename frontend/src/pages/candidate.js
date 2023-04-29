// Importing necessary modules
import React, { useContext, useEffect } from "react"; // Importing React and its hooks

import { VotingProvider } from "../context/Voter"; // Importing the VotingProvider component from "../context/Voter"
import { VotingContext, fetchContract } from "../context/Voter";
import Web3Modal from "web3modal";
import { ethers, providers } from "ethers";
import Countdown from "react-countdown";
import Card from "../components/card";
import "./candidate.css";

// Component definition
const Candidate = () => {
  // Destructuring values from the VotingContext
  const {
    checkIfWalletIsConnected,
    getNewCandidate,
    candidateArray,
    giveVote,
    candidateLength,
    currentAccount,
    voterLength,
  } = useContext(VotingContext);

  // Checking if the wallet is connected
  useEffect(() => {
    checkIfWalletIsConnected();
  });

  // Component rendering
  return (
    <div className="home">
      {currentAccount && (
        <div className="winner">
          <div className="winner_info">
            <div className="candidate_list">
              <p>
                Number of Candidate: <span> {candidateLength}</span>
              </p>
            </div>
            <div className="voter_list">
              <p>
                Number of Voter: <span>{voterLength}</span>
              </p>
            </div>
          </div>
          <div className="winner_message">
            <small>
              <Countdown date={Date.now() + 1000000} />
            </small>
          </div>
        </div>
      )}

      <Card candidateArray={candidateArray} giveVote={giveVote} />
    </div>
  );
};
// Exporting the Candidate component as default.
export default Candidate;
