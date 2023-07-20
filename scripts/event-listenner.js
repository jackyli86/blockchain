module.exports = async function main(callback) {
  try {
    // Our code will go here
    /*
    const MyFirstToken = artifacts.require("MyFirstToken");
    const Web3 = artifacts.require("web3");
    const jjt = MyFirstToken.deployed();

    Web3.eth.defaultBlock = "earliest";

    jjt.events.ValueChanged({}, function (error, event) { console.log("===", error, event); })
      .on("connect", function (subscriptionId) { console.log("connect", subscriptionId); })
      .on("data", function (event) { console.log("data", event) })
      .on("changed", function (event) { console.log("changed", event) })
      .on("error", function (error, receipt) { console.log("error", error, receipt) });
    */

    const MyFirstTokenContract = artifacts.require('MyFirstToken');
    const mycontract = await MyFirstTokenContract.deployed();
    const name = await mycontract.name();
    console.log('Contract Name is', name.toString());

    await mycontract.getPastEvents(
      "Transfer", 
      {fromBlock:"earliest",toBlock: "latest"}, 
      function(error, events){ console.log(events); }
    ).then(function(events){
      console.log(events);
    });

    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    const nodeInfo = await web3.eth.getNodeInfo();
    console.log(nodeInfo);



    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};


