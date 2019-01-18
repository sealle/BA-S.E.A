const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const provider = ganache.provider(); //communication provider between ganache and instance web3
const web3 = new Web3(provider);
const { interface, bytecode } = require("../compile");

let accounts;
let kycverify; //javascript representation of Contract

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  // teaches web3 about what methods an User contract has
  kycverify = await new web3.eth.Contract(JSON.parse(interface))
    //tells web3 that we want to deploy a new copy of this contract
    .deploy({ data: bytecode })
    //Instructs web3 to send out a transaction that creates this contract
    .send({ from: accounts[0], gas: "1000000" });

  kycverify.setProvider(provider);
});

describe("KYCVerification", () => {
  it("deploys a contract", () => {
    assert.ok(kycverify.options.address);
  });
  it("transfers a payable message ", async () => {
    await kycverify.methods.verify(
      "0xbE731D43973446dDDD5dbE2548047539f5C129f2",
      "0x89B4837424cf559CC36112FD357B25Ba423B234B"
    );
  });
  it("can send a boolean answer", async () => {
    await kycverify.methods.answer(true);
  });
  it("can pay an either amount", async () => {
    await kycverify.methods.payKYC(0.1);
  });
  it("can store a sha3 hash", async () => {
    await kycverify.methods.storeHash(
      "0xc4314e9b27a5e0bec39f436bb5e3203e369e588862e665712de65092e44f9f68"
    );
  });
  it("can return an array of all stored hashes", async () => {
    await kycverify.methods.getHashes();
  });
});
