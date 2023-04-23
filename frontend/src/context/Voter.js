import React, { useState, useEffect, createContext, useContext } from "react";
import { Web3Modal } from "@web3modal/react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//internal imports
import { votingAddress, votingAddressABI } from "./constants";
import { seconds } from "@nomicfoundation/hardhat-network-helpers/dist/src/helpers/time/duration";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

//function to fetch the contract and allow us to communicate
export const fetchContract = (signerOrProvider) =>
  new ethers.Contract(votingAddress, votingAddressABI, signerOrProvider);

export const VotingContext = createContext();

export const VotingProvider = ({ children }) => {
  const votingTitle = "my first dapp";
  const [currentAccount, setCurrentAccount] = useState("");
  const [candidateLength, setCandidateLength] = useState("");
  const pushCandidate = [];
  const candidateIndex = [];
  const [candidateArray, setCandidateArray] = useState(pushCandidate);

  //End of candidate data
  const [error, setError] = useState("");
  const highestVote = [];

  //----Voter Section
  const pushVoter = [];
  const [voterArray, setVoterArray] = useState(pushVoter);
  const [voterLength, setVoterLength] = useState("");
  const [voterAddress, setVoterAddress] = useState([]);

  //Connecting wallet metamask
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setError("Please Install Metamask");
    const account = await window.ethereum.request({
      method: "ethers_accounts",
    });

    if (account.length) {
      setCurrentAccount(account[0]);
    } else {
      setError("Please Install MetaMask and connect,then reload the page");
    }
  };

  //connect wallet
  const connectWallet = async () => {
    if (!window.ethereum) return setError("Please Install MetaMask");
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setCurrentAccount(account[0]);
  };

  //upload to ipfs voter Image
  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `http://ipfs.infura.io/ipfs/${added.path}`;
      return url;
    } catch (error) {
      setError("Error uplloading to IPFS");
    }
  };

  return (
    <VotingContext.Provider
      value={{
        votingTitle,
        checkIfWalletIsConnected,
        connectWallet,
        uploadToIPFS,
      }}
    >
      {children}
    </VotingContext.Provider>
  );
};

const Voter = () => {
  const { votingTitle } = useContext(VotingContext);
  return <div>{votingTitle}</div>;
};

export default Voter;
