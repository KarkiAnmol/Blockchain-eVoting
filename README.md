# e-Lect
# Decentralized Voting Platform
This is a decentralized voting platform built using React, Solidity, and Hardhat. The platform allows users to register as voters, verify their identity, and cast their vote for a candidate of their choice. The platform also allows administrators to create new candidates and monitor the voting process.

# Features
The system includes the following features:

⦾ Voter verification: Voters must be verified using their unique ID before being allowed to cast their votes.

⦾ Candidate registration: Only the admin can create candidates and add them to the candidate list.

⦾ Secure voting: Voters can only vote once and their vote is stored on the blockchain, making it tamper-proof and transparent.

⦾ Winner determination: The winner of the election is determined automatically after a fixed interval of time has passed since the voting period ended.

⦾ Voter anonymity: Voters' identities are kept anonymous on the blockchain, ensuring the privacy of their vote.


# Getting Started

```shell
Note: To use this platform, you need to have Metamask installed on your browser.
```
To get started with the project, clone the repository to your local machine:



```shell
git clone https://github.com/KarkiAnmol/Blockchain-eVoting
```
Next, install the dependencies:

```shell
cd Blockchain-eVoting
npm install

```
To start the local blockchain network, run the following command on the project root directory:
```shell
npx hardhat node # This will start a local blockchain network


```
To deploy the contract to a local blockchain network, run:


```shell
npx hardhat compile # This will compile the Solidity contracts
npx hardhat run scripts/deploy.js --network localhost # This will deploy the contracts to the local network

```
Once the contract is deployed, start the React app by running the command on the frontend directory:


```shell
cd frontend
npm start

```
Lastly, to start the backend server, run the following command on the backend directory:

```shell
cd backend
nodemon
```

# How to use
To use the platform, open your browser and navigate to http://localhost:3000/, then follow these steps:

1. Verify your voter ID using the provided function.

2. Once verified, you will be able to view the list of candidates.

3. Select your preferred candidate and cast your vote.

4. After the voting period has ended, the winner will be automatically determined and displayed on the voting page.

# Contributing
If you would like to contribute to the project, please create a pull request with your changes. Before submitting a pull request, please make sure to:

Run npm run lint to check for any linting errors
Run npm test to make sure all tests pass
# License
This project is licensed under the MIT license. See the LICENSE file for more details.
