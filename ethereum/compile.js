const path = require("path");
const fs = require("fs");
const solc = require("solc");

const userPath = path.resolve(__dirname, "contracts", "KYCVerification.sol");
const source = fs.readFileSync(userPath, "utf8");
console.log(solc.compile(source, 1).contracts[":KYCVerification"]);

module.exports = solc.compile(source, 1).contracts[":KYCVerification"];