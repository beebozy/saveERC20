import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x13532b7947ac311F6fa3dc2C5BA300beaE438f81";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1
