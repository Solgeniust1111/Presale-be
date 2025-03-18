import { PublicKey } from "@solana/web3.js";
import { programId } from "../contract/config";


// Configure the constants
const PRESALE_SEED = "PRESALE_SEED";
const USER_SEED = "USER_SEED";
const PRESALE_VAULT = "PRESALE_VAULT";

const getUserInfoPDA = async (user: PublicKey) => {
    return PublicKey.findProgramAddressSync(
        [Buffer.from(USER_SEED), user.toBuffer()],
        programId
    )[0]
};

// address of presaleinfo PDA
const getPresalePDA = async () => {
    return PublicKey.findProgramAddressSync(
        [Buffer.from(PRESALE_SEED)],
        programId
    );
};

// address of presalevault PDA
const getVaultPDA = async () => {
    return PublicKey.findProgramAddressSync(
        [Buffer.from(PRESALE_VAULT)],
        programId
    );
};

export {
    getUserInfoPDA,
    getPresalePDA,
    getVaultPDA
}