const TrueLocker = artifacts.require("TrueLocker");

module.exports = function(deployer) {
  deployer.deploy(TrueLocker);
};
