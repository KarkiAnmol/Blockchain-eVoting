import React from "react";
import { VotingProvider } from "../context/Voter";

function Voting(props) {
  const { Component, pageProps } = props;

  return (
    // <VotingProvider>
    <div>
      <h1>Welcome to the voting page!</h1>
      <p>You can now cast your vote.</p>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
    // </VotingProvider>
  );
}

export default Voting;
