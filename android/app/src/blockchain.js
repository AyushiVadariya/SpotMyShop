// src/blockchain.js

// Import Nitrolite (ERC7824 token operations)
import Nitrolite from '@erc7824/nitrolite';

// Import Clearnode / Yellow DID
// Assuming you copied the clearnode repo into 'lib/clearnode'
import { createDID } from '../lib/clearnode';

// Initialize Nitrolite
const nitro = new Nitrolite();

// Example function to create DID
export async function createUserDID(name) {
  try {
    const did = await createDID(name);
    console.log("User DID:", did);
    return did;
  } catch (err) {
    console.error(err);
  }
}

// Example function to interact with Nitrolite
export function mintToken(address, amount) {
  nitro.mint(address, amount)
    .then(res => console.log("Minted:", res))
    .catch(err => console.error(err));
}
