import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import PresaleContract from "./idl.json";
import { PresaleContract_Type } from './presale_contract'
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";

const wallet = new NodeWallet(Keypair.generate())
const connection = new Connection(process.env.RPC_ENDPOINT || process.exit(1))
const programId = new PublicKey("4KhevSM5ymS2ABys6VwdHx3kaNq7oUK2VLvQzrQ59W24");
const provider = new AnchorProvider(connection, wallet, { commitment: "confirmed" })


const program = new Program(PresaleContract as PresaleContract_Type, provider);


const POOL_SEED_PREFIX = "liquidity_pool";
// const LIQUIDITY_SEED = "LiqudityProvider";
const SOL_VAULT_PREFIX = "liquidity_sol_vault";
export {
    programId,
    PresaleContract,
    POOL_SEED_PREFIX,
    SOL_VAULT_PREFIX,
    connection,
    program
}