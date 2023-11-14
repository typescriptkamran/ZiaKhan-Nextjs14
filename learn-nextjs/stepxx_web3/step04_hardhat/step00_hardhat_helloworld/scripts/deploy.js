"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentTimestampInSeconds = Math.round(Date.now() / 1000);
        const unlockTime = currentTimestampInSeconds + 60;
        const lockedAmount = hardhat_1.ethers.utils.parseEther("0.001");
        const Lock = yield hardhat_1.ethers.getContractFactory("Lock");
        const lock = yield Lock.deploy(unlockTime, { value: lockedAmount });
        yield lock.deployed();
        console.log(`Lock with ${hardhat_1.ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
    });
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
