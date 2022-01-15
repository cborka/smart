const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DonationsAccepting", function () {
    it("Should return the new donationsAccepting once it's changed", async function () {
        const DonationsAccepting = await ethers.getContractFactory("DonationsAccepting");
        const donationsAccepting = await DonationsAccepting.deploy();
        await donationsAccepting.deployed();

        console.log("DonationsAccepting deployed to:", donationsAccepting.address);

        // ...

    });
});


