import React, { useState, useEffect, createContext, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";

//internal imports
import { VotingAddress, VotingAddressABI } from "./constants";
import { seconds } from "@nomicfoundation/hardhat-network-helpers/dist/src/helpers/time/duration";

// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
const projectId = "2OoInHAMMFhyet8kCoaOnEwyUeY";
const projectSecret = "75229b2d8533c478eb558850795db1aa";
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString(
  "base64"
)}`;

const client = ipfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});
//function to fetch the contract and allow us to communicate
export const fetchContract = (signerOrProvider) =>
  new ethers.Contract(VotingAddress, VotingAddressABI, signerOrProvider);

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
      method: "eth_accounts",
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
    const subdomain = "https://elect.infura-ipfs.io";
    try {
      const added = await client.add({ content: file });
      // console.log("added.path:", added.path);
      const URL = `${subdomain}/ipfs/${added.path}`;
      return URL;
    } catch (error) {
      console.log("Error uploading file to IPFS.", error);
    }
  };
  // const navigate = useNavigate();

  //CREATE VOTER
  const createVoter = async (formInput, fileUrl) => {
    try {
      const { name, address, position } = formInput;

      console.log("button return:", name, address, position, fileUrl);

      //Connecting smart contract
      const providerOptions = {};
      const web3Modal = new Web3Modal({
        providerOptions, // required
      });
      const connection = await web3Modal.connect();
      // console.log(web3Modal);
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      // console.log(" create voter contract:", contract);

      //UPLOAD VOTER INFO TO IPFS
      const data = JSON.stringify({ name, address, position, image: fileUrl });
      const added = await client.add(data);
      const url = `https://infura-ipfs.io/ipfs/${added.path}`;
      // console.log("VOTER DETAILS IN IPFS URL:", url);

      // console.log("abpout ot use voter right function");
      //use VOTERRIGHT FUNCTION SMART CONTRACT FROM FRONTEND
      try {
        const voter = await contract.voterRight(address, name, fileUrl, url, {
          gasLimit: 1000000,
        });
        voter.wait();
        console.log(`Voter Registered:✅ `);
        console.log(
          `voter data of address ${address} that will be redirected to voterlist:`,
          voter
        );
        // voterAddress.push(address);
        // console.log("Voters Address from create Voter:", voterAddress);
        // navigate("/voterlist"); // navigate to the voter list page
      } catch (error) {
        console.log("Couldnt register:", error);
      }
      // navigate("/voterList");
    } catch (error) {
      setError("Error in creating voter", error);
      return false;
    }
  };

  //GET VOTER DATA ----TO BE DEBUGGED
  const getAllVoterData = async (event) => {
    //CONNECTING SMART CONTRACT
    try {
      const providerOptions = {};
      const web3Modal = new Web3Modal({
        providerOptions,
      });
      const connection = await web3Modal.connect();
      //   // console.log("the following object is here:  ");
      //   console.log(web3Modal);
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      console.log("get all voter contract:", contract);

      // get voter data

      try {
        const voterListData = await contract.getVoterList({
          gasLimit: 1000000,
        });
        // voterListData.wait();

        setVoterAddress(voterListData);
        console.log("Voter list from getAllvoterdata:", voterAddress);
        voterListData.map(async (eL) => {
          const singleVoterData = await contract.getVoterData(eL);
          pushCandidate.push(singleVoterData);
          // console.log("single voter data:", singleVoterData);
        });
      } catch (error) {
        console.log("Error while getting voter list:", error);
      }
      //VOTER LENGTH
      const voterListLength = await contract.getVoterLength();
      // console.log("voterListLengt:", voterListLength.toNumber());
      setVoterLength(voterListLength.toNumber());
    } catch (error) {
      setError("Something went wron fetching data", error);
    }
  };
  // console.log("voter Address OUTSIDE:", voterAddress);
  useEffect(() => {
    getAllVoterData();
  }, []);

  //to be debugged later
  //ERROR: call revert exception [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] (method="getVoterList()", data="0x", errorArgs=null, errorName=null, errorSignature=null, reason=null, code=CALL_EXCEPTION, version=abi/5.7.0)
  // at Logger.makeError (index.ts:269:1)
  // at Logger.throwError (index.ts:281:1)
  // at Interface.decodeFunctionResult (interface.ts:427:1)
  // at Contract.<anonymous> (index.ts:400:1)
  // at Generator.next (<anonymous>)
  // at fulfilled (index.ts:1:1)

  // console.log("calling functioon getAllVoterData:");
  // useEffect(() => {
  //   getAllVoterData();
  // }, []);

  return (
    <VotingContext.Provider
      value={{
        votingTitle,
        checkIfWalletIsConnected,
        connectWallet,
        uploadToIPFS,
        createVoter,
        getAllVoterData,
        // createVoter,
        // getAllVoterData,
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
