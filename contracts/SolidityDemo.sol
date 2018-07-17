pragma solidity ^0.4.17;

// Basic Demo to test the state of the Networks (local and Rinkeby)
contract SolidityDemo{
    string public message;

    function SolidityDemo(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public{
        message = newMessage;
    }

    function getMessage() public view returns (string){
        return message;
    }
}
