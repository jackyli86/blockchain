// scripts/index.js
module.exports = async function main (callback) {
  try {
    // Our code will go here
    // Set up a Truffle contract, representing our deployed Box instance
    const BOX = artifacts.require('Box');
    const box = await BOX.deployed();
    
    
    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};