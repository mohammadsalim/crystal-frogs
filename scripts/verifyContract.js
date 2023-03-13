/**
 *  This script will calculate the constructor arguments for the `verify` function and call it.
 *  You can use this script to verify the contract on etherscan.io.
 */

require('@nomiclabs/hardhat-etherscan')
const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')
const freeWhitelist = require('./freeWhitelist.js')

const BASE_URI = 'ipfs://QmPjU46hSNJAyghw9x8umqi9jQsaZGxiw6PYhhvzENAYyk/'
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

  await hre.run('verify:verify', {
    address: '0xa07BB76D93891437084cb71fd3183BbB3a35B15a', // Deployed contract address
    constructorArguments: [BASE_URI, root, freeRoot, proxyRegistryAddressGoerli]
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
