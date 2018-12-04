const path = require("path");
const fs = require("fs");
const solc = require("solc");

const kycPath = path.resolve(__dirname, "contracts", "KYCVerification.sol");
const source = fs.readFileSync(kycPath, "utf8");
console.log(solc.compile(source, 1).contracts[":KYCVerification"]);

module.exports = solc.compile(source, 1).contracts[":KYCVerification"];