require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

const { INFURA_ID, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_ID}`,
      accounts: [PRIVATE_KEY],
    },
  },
};
