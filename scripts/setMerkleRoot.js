/**
 *   This script will calculate the merkle root from the whitelist array and set it to the contract
 *   using the `setMerkleRoot` function defined in CrystalFrogs.sol contract. For this script to work your contract
 *   already should be deployed and you should have the deployed contract address. To swap between If you make a change in whitelist.js
 *   make sure you update the merkleroot in the contract using the script `scripts/setMerkleRoot.js`
 */

const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')
const freeWhitelist = require('./freeWhitelist.js')

async function main() {
  const nftFactory = await hre.ethers.getContractFactory('CrystalFrogs')
  const nftContract = await nftFactory.attach(
    '0x78627C6798b9Db51Ca48dea1ff6ce0f5C5a66F81' // Deployed contract address
  )

  // Re-calculate merkle root from the freeWhitelist array.
  const freeLeafNodes = freeWhitelist.map((addr) => keccak256(addr))
  const freeMerkleTree = new MerkleTree(freeLeafNodes, keccak256, {
    sortPairs: true
  })
  const freeRoot = freeMerkleTree.getRoot()

  // Re-calculate merkle root from the whitelist array.
  const leafNodes = whitelist.map((addr) => keccak256(addr))
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
  const root = merkleTree.getRoot()

  // Set the re-calculated merkle root to the contract.
  // Comment out root not being used

  await nftContract.setFreeMerkleRoot(freeRoot)
  // await nftContract.setMerkleRoot(root)

  console.log('FreeWhitelist root set to:', freeRoot)
  // console.log('Whitelist root set to:', root)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
