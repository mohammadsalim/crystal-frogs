/**
 *   This script will calculate the merkle root from the whitelist array and set it to the contract
 *   using the `setMerkleRoot` function defined in CrystalFrogsV2.sol contract. For this script to work your contract
 *   already should be deployed and you should have the deployed contract address. To swap between If you make a change in whitelist.js
 *   make sure you update the merkleroot in the contract using the script `scripts/setMerkleRoot.js`
 */

const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')
const genesisWhitelist = require('./genesisWhitelist.js')

async function main() {
  const nftFactory = await hre.ethers.getContractFactory('CrystalFrogsV2')
  const nftContract = await nftFactory.attach(
    '0xC71d1c1F36c21812296443fffFF67E1f4AD5239b' // Deployed contract address
  )

  // Re-calculate merkle root from the freeWhitelist array.
  const genesisLeafNodes = genesisWhitelist.map((addr) => keccak256(addr))
  const genesisMerkleTree = new MerkleTree(genesisLeafNodes, keccak256, {
    sortPairs: true
  })
  const genesisRoot = genesisMerkleTree.getRoot()

  // Re-calculate merkle root from the whitelist array.
  const leafNodes = whitelist.map((addr) => keccak256(addr))
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
  const root = merkleTree.getRoot()

  // Set the re-calculated merkle root to the contract.
  // Comment out root not being used

  await nftContract.setGenesisMerkleRoot(genesisRoot)
  // await nftContract.setMerkleRoot(root)

  console.log('GenesisWhitelist root set to:', genesisRoot)
  // console.log('Whitelist root set to:', root)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
