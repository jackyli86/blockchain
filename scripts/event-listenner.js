module.exports = async function main(callback) {
  try {
    // Our code will go here
    const WeTokenContract = artifacts.require('WeToken');
    const we_token_instance = await WeTokenContract.deployed();
    const name = await we_token_instance.name();
    console.log('Contract Name is', name.toString());

    await we_token_instance.getPastEvents(
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


