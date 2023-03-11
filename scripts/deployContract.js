/**
 *  This script will calculate the constructor arguments for CrystalFrogs.sol and deploy it.
 *  After deploying, you can access the contract on etherscan.io with the deployed contract address.
 */

const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')
const freeWhitelist = require('./freeWhitelist.js')

const BASE_URI = 'ipfs://QmSTFCGiPAM3VXezGtYs1WbLStYxZuyigv6PXcd1ymxPAn/'
const proxyRegistryAddressGoerli = '0xf57b2c51ded3a29e6891aba85459d600256cf317'
const proxyRegistryAddressMainnet = '0xa5409ec958c83c3f309868babaca7c86dcb077c1'

async function main() {
  // Calculate merkle root from the freeWhitelist array
  const freeLeafNodes = freeWhitelist.map((addr) => keccak256(addr))
  const freeMerkleTree = new MerkleTree(freeLeafNodes, keccak256, {
    sortPairs: true
  })
  const freeRoot = freeMerkleTree.getRoot()

  // Calculate merkle root from the whitelist array
  const leafNodes = whitelist.map((addr) => keccak256(addr))
  const merkleTree = new MerkleTree(leafNodes, keccak256, {
    sortPairs: true
  })
  const root = merkleTree.getRoot()

  // Deploy the contract
  const CrystalFrogs = await hre.ethers.getContractFactory('CrystalFrogs')
  const crystalFrogs = await CrystalFrogs.deploy(
    BASE_URI,
    root,
    freeRoot,
    proxyRegistryAddressGoerli
  )

  await crystalFrogs.deployed()

  console.log('CrystalFrogs deployed to:', crystalFrogs.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
