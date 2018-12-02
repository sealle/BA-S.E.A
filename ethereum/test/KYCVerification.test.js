const assert = require("assert");
const ganache = require("ganache-cli"); //network
const Web3 = require("web3"); //constructor

const provider = ganache.provider(); //communication provider between ganache and instance web3
const web3 = new Web3(provider);
const { interface, bytecode } = require("../compile");

let accounts;
let kycverify; //javascript representation of User Contract

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  // teaches web3 about what methods an User contract has
  kycverify = await new web3.eth.Contract(JSON.parse(interface))
    //tells web3 that we want to deploy a new conpy of this contract
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
      await kycverify.methods
        .transfer(
          "0x52718463f0cae3eb9a4d3419054f6d53759a6a7d4923e5ccc68238254ba2414e"
        )
    });
    //payable: https://medium.com/@gus_tavo_guim/testing-your-smart-contracts-with-javascript-40d4edc2abed
    it("can send a boolean answer", async () => {
        await kycverify.methods.answer(true)
    })
    it("can pay an either amount", async () => {
        await kycverify.methods.payKYC();
    })
  });

