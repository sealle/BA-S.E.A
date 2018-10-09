const path = require("path");
const fs = require("fs");
const solc = require("solc");

const userPath = path.resolve(__dirname, "contracts", "User.sol");
const source = fs.readFileSync(userPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":User"];
