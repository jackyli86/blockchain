
const Web3 = require("web3");
const web3 = new Web3("ws://127.0.0.1:8545");

web3.eth.defaultBlock = "earliest";
const BoxContractData = require("../build/contracts/Box.json");
const BoxContractAbi = BoxContractData.abi;

const boxContract = new web3.eth.Contract(BoxContractAbi, '0xCfEB869F69431e42cdB54A4F4f105C19C080A601');

boxContract.events.ValueChanged({}, function( error, event ){ console.log("===", error, event); })
  .on("connect", function(subscriptionId){ console.log("connect", subscriptionId);})
  .on("data", function(event) { console.log("data", event)})
  .on("changed", function(event) { console.log("changed", event)})
  .on("error", function(error, receipt) { console.log("error", error, receipt)});


