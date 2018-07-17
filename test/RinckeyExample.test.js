// Test to use on the Rinckey Network

const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider()); //instance, web3 interacts with the provider
// and the provider with the network!
const { interface, bytecode } = require("../compile");
let accounts;
let solidityDemo;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  solidityDemo = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["This is a basic demo for Neural Company"]
    })
    .send({ from: accounts[0], gas: "1000000" });
});

// We include some basic unit / integration tests to test the Solidity contract
// agains ganache network
describe("SolidityDemo", () => {
  it("deploys a contract2", () => {
    console.log(solidityDemo);
  });

  it("deploys a contract", () => {
    assert.ok(solidityDemo.options.address);
  });

  it("has a default message", async () => {
    const message = await solidityDemo.methods.message().call();
    assert.equal(message, "This is a basic demo for Neural Company");
    console.log(message);
  });

  it("can change the message", async () => {
    // Modification, we need to pay for this!
    await solidityDemo.methods
      .setMessage("this is a test")
      .send({ from: accounts[0] });
    const message = await solidityDemo.methods.message().call();
    console.log(message);
    assert.equal(message, "this is a test");
  });
});
