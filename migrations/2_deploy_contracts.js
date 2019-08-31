var DistributedDrive = artifacts.require("./DistributedDrive.sol");

module.exports = function(deployer) {
  deployer.deploy(DistributedDrive);
};
