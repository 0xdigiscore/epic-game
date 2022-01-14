const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Leo", "Aang", "Pikachu"],       // Names
      ["https://i.imgur.com/lVlPvCBb.jpg", // Images
      "https://i.imgur.com/LbPsLrCb.jpg", 
      "https://i.imgur.com/amckVul.jpeg"],
      [100, 200, 300],                    // HP values
      [100, 50, 25]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();