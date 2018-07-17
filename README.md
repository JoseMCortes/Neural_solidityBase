# Neural_solidityBase
Base project structure to deploy our Solidity projects using Web3, javascript, Node.js and Mocha for testing purposes. 

## Technology stack:

* Javascript: language to create some base UI and test tasks
* Web3: used to perform communication actions from/to javascript from/to Ethereum
* Solidity: Ethereum contracts language
* Ganache: local network to launch the Unit/Integration tests of the Solidity contracts
* Mocha: framework to execute the Unit/Integration test cases
* Node: environment used to launch the Javascript tasks
* Truffle: basic usage for testing purposes

## Usage and deployment:

node -v  (gest node version installed)
sudo npm install -g truffle (installs truffle)
npm init (creates new node module with package.json
npm install --save solc  (installs solidity compiler)

node compile.js (executes the js file)
npm install --save mocha ganache-cli web3@1.0.0-beta.26 (installs mocha to test)
npm run test (executs the mocha tests in the test folder)
npm install --save truffle-hdwallet-provider (installs provider to acces first node in Network)
node deploy.js (executes deploy)
