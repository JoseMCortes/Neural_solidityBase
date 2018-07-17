const path = require('path'); // Path module, Existing modules
const fs = require('fs');     // File system module
const solc = require('solc');

const solidityDemoPath = path.resolve(__dirname, 'contracts', 'SolidityDemo.sol'); // node.js current directory
const source = fs.readFileSync(solidityDemoPath, 'utf8');

//console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[':SolidityDemo']; // la salida es un JSON
