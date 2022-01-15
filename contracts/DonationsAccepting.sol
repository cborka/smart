//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract DonationsAccepting {

    struct Donation {
        uint amount;
        address donater;
    }
    Donation[] donations;

    address owner;

    constructor() {
        owner = msg.sender;
    }

    function reseive() external payable {
        donations.push(Donation(msg.value, msg.sender));
        console.log("%s donate %s wei", msg.sender, msg.value);
    }

    function getDonatesInfo() public view returns(Donation[] memory){
        require(owner == msg.sender, "Restricted. Not an owner!");

        return donations;
    }

    function withdrawDonations(address payable _to) public {
        require(owner == msg.sender, "Restricted. Not an owner!");

        _to.transfer(address(this).balance);
    }
}
