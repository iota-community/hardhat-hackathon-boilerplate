require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

module.exports = {
  solidity: "0.7.3",
  networks: {
    iscp: {
      url: "https://evm.wasp.sc.iota.org",
      chainId: 1074,
      accounts: privateKey,
      timeout: 60000
    },
  }
};
