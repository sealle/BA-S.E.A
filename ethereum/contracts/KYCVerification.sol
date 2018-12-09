pragma solidity ^0.4.17;

contract KYCVerification {
    address private kycAddress = 0x4399C3daed9b7cce56b7Edd4157FA3bDe3385d2A;
    
    event KycListen(
        string kycKey,
        address platformAddress,
        address sender
    );
    
    event PlatformListen(
        bool confirmed
    );
    
    function verify(string kycKey, address platformAddress) public payable {
        emit KycListen(kycKey, platformAddress, msg.sender);
        kycAddress.transfer(msg.value);
    }
    
    function answer(bool confirmed) public {
        require(msg.sender == kycAddress, "You cannot do this");
        emit PlatformListen(confirmed);
    }
    
    function payKYC() public payable {
        kycAddress.transfer(msg.value);
    } 
    
}