import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:3000");

export default web3;
