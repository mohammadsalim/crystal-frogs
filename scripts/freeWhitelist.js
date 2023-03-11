/**
 *  This array contains the addresses of the Proton holders and team.
 *  Make sure to add your Proton holders and team to this array. Otherwise,
 *  they will not be able to interact with the contract and mint on free-mint. For the pre-sale/ public sale,
 *  the whitelist is not required.
 *
 *  ** IMPORTANT: **
 *  Since we are passing the whitelist root (merkleroot) to the contract constructor when deploying,
 *  if you add a new user address to the whitelist or remove an existing user address from the whitelist,
 *  you must change the merkleroot in the contract. For this reason, I created a new script to update the merkleroot
 *  in the contract. You can find it in `scripts/setMerkleRoot.js`.
 */

module.exports = [
  '0x2d3b72908B8CB5Fa4d1bE80f3D2BF9FD17b945A2',
  '0x3D8aFF30C254Ae9eBBC23E7ccCd13A517F9d5B1d',
  '0x981D67745fB155a79968040FF23974BDFcB1384F',
  '0x1e3De549EF02ed8cbfb478B7Bd7d8d8729bAFaCF',
  '0xfAe257A97e3097443BDdCaf9A0379A5da66457Df',
  '0x0e338126339F5b151eF8E5cac6AcA76AFCA29a4b',
  '0x58A0d1D5f90fF8121660B9e8b352850727024C78',
  '0x2d3b72908B8CB5Fa4d1bE80f3D2BF9FD17b945A2',
  '0xd15eE0114B5170264cB3B7Cb279f82C1B5605B3A',
  '0x9D50Cb08163504668B64742a23aceF7206E35E58',
  '0x89635dc41BEceEb486Ed982eEaE72B3c01cc189E',
  '0x7b5258ef89AfDeb8423A912077CCa907f4A20100',
  '0x3AC9E19507B2BeBd1Ea1D29f51C5eA36d221E780',
  '0xA6c0987A27D39c091AED346D9c0b239D095b200c',
  '0xE26060915E953D675C9aA56De64916eC4e036077'
]
