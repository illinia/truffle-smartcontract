const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync('.secret').toString().trim();
const infuraKey = '7c77ddd7f17f4ce18129493d73be7070';

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: 15,
      gas: 4700000
    },
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*'
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(mnemonic,
          `https://ropsten.infura.io/v3/${infuraKey}`)
      },
      network_id: 3,
      gass: 4700000
    }
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  },
  plugins: ["solidity-coverage"]
};