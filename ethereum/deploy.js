const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "Your mneumonic", // my mneumonic
  "Your Infura API Key" // Personal Infura API Key
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  //interface and contract address are needed to connect to it
  console.log(interface);
  console.log("Contract deployed to", result.options.address); //address of deployed contract
};

deploy();
