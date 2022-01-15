const hre = require("hardhat");

async function main() {
    // We get the contract to deploy
    const DonationsAccepting = await hre.ethers.getContractFactory("DonationsAccepting");
    const donationsAccepting = await DonationsAccepting.deploy();

    await donationsAccepting.deployed();

    console.log("DonationsAccepting deployed to:", donationsAccepting.address);

//    0x96eB06D7EB14B9E494Cb2E3c9F4c8bfC40B76C2D  contract address in rinkeby
//    npx hardhat verify  --network rinkeby 0x96eB06D7EB14B9E494Cb2E3c9F4c8bfC40B76C2D

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
