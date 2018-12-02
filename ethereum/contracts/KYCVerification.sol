pragma solidity ^0.4.17;

contract KYCVerification {
    address public kycAddress = 0x14723a09acff6d2a60dcdf7aa4aff308fddc160c;
    address public platformAddress;
    
    event KycListen(
        string kycKey
    );
    
    event PlatformListen(
        bool confirmed
    );
    
    function transfer(string newMessage) public payable {
        emit KycListen(newMessage);
        platformAddress = msg.sender;
        kycAddress.transfer(msg.value);
    }
    
    function answer(bool newConfirmation) public {
        require(msg.sender == kycAddress, "You cannot do this");
        emit PlatformListen(newConfirmation);
    }
    
    function payKYC() public payable {
        kycAddress.transfer(msg.value);
    } 
    
}