import web3 from "./web3";

const address = "0xe25951F84289Fb6189c358b91725EF9319717436"; //address of SC
const abi = [
  {
    constant: false,
    inputs: [{ name: "newUser", type: "bytes32" }],
    name: "saveUser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getUser",
    outputs: [{ name: "", type: "bytes32[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

export default new web3.eth.Contract(abi, address);
