const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "demise process gate luxury next daughter sea admit dream voice actual young", // my mneumonic
  "https://rinkeby.infura.io/v3/b652b579ac1f4420a12407a0a1836b44" // Personal Infura API Key
);
//--> Metamask?, but i need all possible wallets

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log(interface);
  console.log("Contract deployed to", result.options.address); //address of deployed contract
};

deploy();