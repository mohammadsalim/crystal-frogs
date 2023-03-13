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
  '0xc1eB5AcD614312bac05Dc8595C18fed3bA043F24',
  '0xFA3790c4E1cf9244d6351A5237AFb8a9AA621AD1',
  '0x05bb88bBdE5be87218b645E890022C8Aa5a62e82',
  '0x308C99F39Ad2Fb243F0a6Cf41685ef7E5faf0E06',
  '0xaf29ab7418516cc3F22E609dC783D75864AB545a',
  '0xAaa17208f95E0a5bC44c40A583D45d4DbC275E43',
  '0x0e36e2c2678Bf45d9F27f4a3E0CF5C65f02Fc492',
  '0xE8f1bfD68D9D662a5273fd1757805C214Bf1a934',
  '0xc9e2696C248A05341d404484df796246b8bEf52f',
  '0x98d39ad8c4d6a852921F30EB734c36FCC4F7Acc9',
  '0x78555568A00445cc6EaAF8597A01Af7e2Bc626A8',
  '0xa16558Ba84628fc0b144cb8174C7722e74855156',
  '0xe557f715e83531216af417a2017f6871aaae4850',
  '0x91da3e77cb67ddadab04d7ced117b5618c36f1ad',
  '0x8349384db9b351aac57193346c701515957dcf0d',
  '0xd8734132197bf4b03826ecb91662612a9f69f20f',
  '0x122176e61db6f18be20d75d6fc113b6bae843298',
  '0x76f7899f68535a9c530d0db6d157e40c0e9c423f',
  '0x6a6c3fd85b3c0e43b27d0e6cd88b0422d1a10937',
  '0x57128D93335b05344948225721f7Fc7387499C0E',
  '0xeb5A81c3044f5cA12854e03dC9eCb27C59591497',
  '0xC7A5566a451703c0A08eD845ba2E4fAEa176A74d',
  '0xa3cA9D6ace92f29422830Ae9588bb4f1313C9A8f'
]
