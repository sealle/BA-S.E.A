pragma solidity ^0.4.17;

contract User {
    
    bytes32[] users;
    
    function saveUser(bytes32 newUser) public {
        users.push(newUser);
    }

    function getUser() public view returns(bytes32[]) {
        return users;
    }
}


