require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",

  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }

};