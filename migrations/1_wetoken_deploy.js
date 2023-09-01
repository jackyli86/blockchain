const WeToken = artifacts.require("WeToken");

module.exports = function (deployer) {
  deployer.deploy(WeToken);
};
