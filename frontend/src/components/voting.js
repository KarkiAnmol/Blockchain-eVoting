import React, { useContext } from "react";
import { VotingProvider } from "../context/Voter";
import { VotingContext, fetchContract } from "../context/Voter";
import Web3Modal from "web3modal";
import { ethers, providers } from "ethers";

function Voting(props) {
  const { Component, pageProps } = props;
  const { votingTitle /*createVoter*/ } = useContext(VotingContext);

  return (
    <VotingProvider>
      <div>
        <h1>Welcome to the voting page!</h1>
        <p>You can now cast your vote.</p>
        <h1>{votingTitle}</h1>
        <div></div>
      </div>
    </VotingProvider>
  );
}

export default Voting;
