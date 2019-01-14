pragma solidity ^0.4.17;

contract KYCVerification {
    address private kycAddress = 0x4399C3daed9b7cce56b7Edd4157FA3bDe3385d2A;
    
    //event listener for the Kyc Platform
    event KycListen(
        string kycKey,
        address platformAddress,
        address sender
    );
    
    //event listener for platforms  sending kycKeys
    event PlatformListen(
        bool confirmed
    );

    //send KycKey to Kyc Platform to verify KycKey
    function verify(string kycKey, address platformAddress) public payable {
        emit KycListen(kycKey, platformAddress, msg.sender);
        kycAddress.transfer(msg.value);
    }
    
    //send boolean answer to requesting address if kycKey is verified
    function answer(bool confirmed) public {
        require(msg.sender == kycAddress, "You cannot do this");
        emit PlatformListen(confirmed);
    }
    
    //user payment for video identification
    function payKYC() public payable {
        kycAddress.transfer(msg.value);
    } 
    
}