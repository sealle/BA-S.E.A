const assert = require("assert");
const ganache = require("ganache-cli"); //network
const Web3 = require("web3"); //constructor

const provider = ganache.provider(); //communication provider between ganache and instance web3
const web3 = new Web3(provider);
const { interface, bytecode } = require("../compile");

let accounts;
let user; //javascript representation of User Contract

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  // teaches web3 about what methods an User contract has
  user = await new web3.eth.Contract(JSON.parse(interface))
    //tells web3 that we want to deploy a new conpy of this contract
    .deploy({ data: bytecode })
    //Instructs web3 to send out a transaction that creates this contract
    .send({ from: accounts[0], gas: "1000000" });

  user.setProvider(provider);
});

describe("User", () => {
  it("deploys a contract", () => {
    assert.ok(user.options.address);
  });
  it("can save and get Users", async () => {
    await user.methods
      .saveUser(
        "0x52718463f0cae3eb9a4d3419054f6d53759a6a7d4923e5ccc68238254ba2414e"
      )
      .send({ from: accounts[0] }); //result is transaction hash
    const users = await user.methods.getUser().call();
    assert.equal(
      users[0],
      "0x52718463f0cae3eb9a4d3419054f6d53759a6a7d4923e5ccc68238254ba2414e"
    );
  });
});
