
// const artifacts = require('@truffle/artifacts');

const Demo = artifacts.require("Demo");

module.exports = function(deployer) {
  deployer.deploy(Demo);
};

