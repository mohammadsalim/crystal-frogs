/**
 *  This script will calculate the constructor arguments for CrystalFrogsV2.sol and deploy it.
 *  After deploying, you can access the contract on etherscan.io with the deployed contract address.
 */

const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')
const genesisWhitelist = require('./genesisWhitelist.js')

const BASE_URI = 'ipfs://QmPjU46hSNJAyghw9x8umqi9jQsaZGxiw6PYhhvzENAYyk/'
const proxyRegistryAddressGoerli = '0xf57b2c51ded3a29e6891aba85459d600256cf317'
const proxyRegistryAddressMainnet = '0xa5409ec958c83c3f309868babaca7c86dcb077c1'

async function main() {
  // Calculate merkle root from the genesisWhitelist array
  const genesisLeafNodes = genesisWhitelist.map((addr) => keccak256(addr))
  const genesisMerkleTree = new MerkleTree(genesisLeafNodes, keccak256, {
    sortPairs: true
  })
  const genesisRoot = genesisMerkleTree.getRoot()

  // Calculate merkle root from the whitelist array
  const leafNodes = whitelist.map((addr) => keccak256(addr))
  const merkleTree = new MerkleTree(leafNodes, keccak256, {
    sortPairs: true
  })
  const root = merkleTree.getRoot()

  // Deploy the contract
  const CrystalFrogsV2 = await hre.ethers.getContractFactory('CrystalFrogsV2')
  const crystalFrogsV2 = await CrystalFrogsV2.deploy(
    BASE_URI,
    root,
    genesisRoot,
    proxyRegistryAddressMainnet
  )

  await crystalFrogsV2.deployed()

  console.log('CrystalFrogsV2 deployed to:', crystalFrogsV2.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
