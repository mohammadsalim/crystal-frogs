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
  '0x205C4d9d198a2e9D74eee70151d1Ba02f3C70Daa',
  '0x54441508a046b4782629D85a164303e14EBD2274',
  '0x2069c7ecAe176c42F0c2186e44e56eFF87C90f07',
  '0x81c0f2aAcd1746509622A00F59aB88E173a5eA31',
  '0x8AE96C5FAfE62944db1AB14ECb59006Cd2710cD5',
  '0x336c9477fDB202cf46c87b27A2DaF52143A243e4',
  '0xD64033135CE3B9C740C36DE3E158AfC56F92942f',
  '0xb57DcA12305063f1a3A517f113660b35121c7543',
  '0x52aFe4863f88337FeE4b5122223a741E2a631Af0',
  '0x0FC2E23dF0587C774B169A417f11B2f49632c7f5',
  '0xfdC2B74E5b57C1594c70a01638188B5062199749',
  '0xb022800d346a85a593c12e81C87eB76a5E785575',
  '0x09FE934101Ce2e683C1f73fa4FF27a953a20447d',
  '0x6894532Cd3B064D9c9066A1341ccb8e0725A3bFa',
  '0xf8598c16d3539d160A3088A0b278C3bf3CbF11F7',
  '0x759c5Afe0164d8eFF45eb02BBEBA542660211003',
  '0x09AAa027BD4878B83d8B2E90Bd450873d96EFD4f',
  '0x3577457d9bEB1550bF086Fc6e43Dbc893b1c2229',
  '0xB05adE1249AE06f7726cb5859eAdC715E3E0A465',
  '0x0e36e2c2678Bf45d9F27f4a3E0CF5C65f02Fc492',
  '0xacf1bBae673b7b49dFD0875B24CDa214785C2DC1',
  '0x7337eE232b707AF3771CA2bF67f07d5A13a8c7f9',
  '0x7874Aa25922877dF71984e763915b1aa653a79f3',
  '0xa36f7d9917832Bf04358a31900D3cA56E1be1507',
  '0xaF86e7bBE342702d90FE87d80Ab35c9344346997',
  '0xFf9911abdBe9d1f7D1A19595B93905C2a9aD60f4',
  '0x90d0DAFcAd3D7E090c7BeDd89322897DfAe20B99',
  '0x4dE4AdDD540f0307882Ef2681C97462c2331F1a9',
  '0xc9e2696C248A05341d404484df796246b8bEf52f',
  '0x6a6C3FD85B3c0e43B27d0e6CD88B0422d1A10937',
  '0x57128D93335b05344948225721f7Fc7387499C0E',
  '0xC7A5566a451703c0A08eD845ba2E4fAEa176A74d',
  '0x6257f35Bc3d4d2CDeA3E7D0CC02B1FA80e740eF4',
  '0x0BDceA527e6bc568b4965aaa36Dd5BCAA90A9B03',
  '0x0e184d96cBF0f6843B3191512A37681b1eac05Ee',
  '0x8bcF63c62d2E5d4718F0f0B49c544550a9372aC1',
  '0xd8734132197bF4b03826ecB91662612A9F69f20F',
  '0x91dA3e77Cb67dDAdAB04D7Ced117B5618C36f1aD',
  '0x30156f66b0ef29c698f6D55a6B55dB8d14199BA5',
  '0x83AEf20258B3f4cea17E51412CB6978Ce414b7FB',
  '0xc9Ee5b6870D74F3fd1Ad903e7716bf576A806CB9',
  '0x9820C366aD2a0B77BfFe9239634E377b871ffbd9',
  '0x4660fBB1E7C72AbDdCf4d90B244887e3521AD3b2',
  '0xc690fF44F4874E81b9E0A862b9a2e24945FdaAa2',
  '0x20B3A40D948F7F8Efe0EEf35876c63a95984bcDE',
  '0xbE194Dc9bD6AD7680F5450320049e8c628d9139F',
  '0x122B96a341Ab8da83EB86F4DceFAA4b1D43125E9',
  '0xE53d5cC9c8a06548B951e3b86D14555267D7d820',
  '0xF73892A76d50cff31A601e24d603E80EadFB2F25',
  '0xcE5d9a72c5ba549206bFeC1D0416Df53C5E887F2',
  '0xc18a207b0e8fAdcC657b1a3eEEdcF081D829505b',
  '0xa3cA9D6ace92f29422830Ae9588bb4f1313C9A8f',
  '0xd78E5adE2cdC907688a4Feb888ef6C60C0a16F53',
  '0xcAA0e990dAd233D17B05078F2a64D660b41CEBa6',
  '0xaf29ab7418516cc3F22E609dC783D75864AB545a',
  '0x0d5bC0Ec3d5E519FEc043100C3028644F2427c8E',
  '0x9988790998fF80f80E771C0fE5534b369565Eb4C',
  '0x98d39ad8c4d6a852921F30EB734c36FCC4F7Acc9',
  '0xAaa17208f95E0a5bC44c40A583D45d4DbC275E43',
  '0x8349384dB9b351AAC57193346c701515957dCF0d',
  '0xE8f1bfD68D9D662a5273fd1757805C214Bf1a934',
  '0x122176E61dB6f18bE20d75d6fC113b6bae843298',
  '0x76F7899F68535A9C530D0dB6d157e40C0E9c423F',
  '0xE557f715e83531216Af417a2017F6871aAAe4850',
  '0xa16558Ba84628fc0b144cb8174C7722e74855156',
  '0x03da37B4D9ecf8f2b553aF5242B8715aCD1A3CB5',
  '0x10084538C56D09f84A955bde83A892aB67af247c',
  '0xc900eA0970838B5b6aB5bE544836506bD347A796',
  '0x5481BE3ee735388607E89181F05Da5Cfab63BD2B',
  '0x89dBC5CB96773352b904d50f9Ad7eB8c5ADe6C22',
  '0x531841DdbDa6dc08619bC7FB73f2605275bE26C8',
  '0x30eC692b66f555233f10e0B7D75A5a1a69522a92',
  '0x1c84469eE010a5c1fA0771aAf450BDe11e34fbcF',
  '0x57f6ee7CB947bae939a9ecc766a55B6F143322f7',
  '0x8df5d3b6f3a948FE276c1c844BF018A4e0CB6DDd',
  '0x99F5e68CAa3a3cB45DE633A15b9223d78bbf00Db',
  '0xC8d6c279AB7FAbcbc7F1F40E24C7b18E3CF51F94',
  '0xF95E68612F5cBe0835Fb6669B408f2bCC2bBaDe1',
  '0x5fE1EcFC22c2BcE40B5645396011252C5f877036',
  '0xC091A0A9E4bb4F620342bdc540b8ea327760b1C5',
  '0x7dc393dea5F96787aE5978D40574C8D1b219F685',
  '0xaA0460d9c139F0bf446Be4EE076C25Da56e1e1f7',
  '0xD868540e33ed4e1dD2Aa2c7c2Ae351D169a8EC87',
  '0x1baCb656b1dD1acA5CCa997EAAFaFDA5A1669FBe',
  '0x71cc64f80E99E753dbCA4d42aE1441065de36A54',
  '0x984bF2fA9969e7Af0a7BCeF0C60Cd12a2481146e',
  '0xd6d619F9805b77Bf5161eF00A37654F6717Cb29f',
  '0x338A6f085935758fd73f96de594fEb24D503F4ef',
  '0x911F6179BAa9c413b76A0417902781E05F5b7539',
  '0xF68F33652339105552fFF877286558718a02C905',
  '0x1F37eaa2B6aE8485CB58CB49A9e065AFcD0924Ae',
  '0xED43d2FaeF7d357fed6153e0F19490A1971744Bd',
  '0xEB5442E53EA30028AdcFDa5d8A76Ac3457591E68',
  '0x8eB81b8Af57D7b64Bc98323284090E4dCC534CDa',
  '0x8978a5536f4388024493E8C62739C697745ac447',
  '0x9e2B30d213b356dEB9C1749d5b7B49A5eB9Cb9a4',
  '0x12FD72d6314Ce5b5e2cCc3E1bf20d55706a62AF5',
  '0x2FfEF3CEaaB926ab5ff9A5b0050736C19E92c372',
  '0x2C47E5cB646fa16c60CFBCF5BA30c67e2a9e41B3',
  '0x680143869B3Ac3e3f0FF1dEf323958c8F73b8B11',
  '0x0d7f55a635733F1BB351Ff01576C727e2Af7496d',
  '0x8d346372ed57D1ca6216bed36DF7D65f9e78BCBE',
  '0x3BD837F3a5F00C62c3A049C8c7B6A7C5bba169d0',
  '0x947F2BA8Da16Dc94963c69Efc7Bfdf96E6E375c8',
  '0x644E24C6B93989eA1664544A3fA36091FC829AeD',
  '0xBd019Bb4d83b9C0d6BFE39f00C8f367C051676d2',
  '0x8c7e78d32CB350D7B560372285610b5E46e67981',
  '0xb1F3972d153f91da0B602d1c67b72510443065d9',
  '0x001CEeF43Ff6d77dE78496Fd8323B0098C125d29',
  '0x4B5320ac597861482bA95ca60380977921170201',
  '0xC2e1492f4F4ad7f298Ed8e585979524c3Aec8818',
  '0x66EF8D019c51A60729e109B9bE1973EA5C6bEDac',
  '0xaFBB2f9f5c3aD4fF448EE2D197f0F36fedf071c8',
  '0x3A58204aE6Aabc7026f4026666E759a197C4cFc2',
  '0x2E29A351Ef44602991aB696D90f8438EbD3A7150',
  '0xef46B19bb44c25F001156ee9E301a6Ed3ca70797',
  '0x3843A8b71cacb65d11FBfEF86C7863337ECf5894',
  '0xF677E7BDC2eDF8Dee137101B46E4b41C4514346B',
  '0x816FA9FeF3009E247EEDE01Cd435943ade237e35',
  '0x365f8a16c27976DCacfc9bae5D9AD38651a6a37D',
  '0xe198eC8392b67449866b749bE548E0ae36d75F5A',
  '0x4d39Cb474f28391F90094520f834622d0E5a2f3b',
  '0xc4Bd9a842a24512b9B724d8cB6322e501B9b0027',
  '0x79Ce70388854c6247db95F20444Fe7d2a1154655',
  '0x3DB41106E008FC56929ADbFaAc372ad78b1BbA94',
  '0x8B1C9e9a3FEA6F0549C6271835F9432EFB8e7383',
  '0x3e5cCdCD605aAF7911d67eC7920E864C0E656284',
  '0xF1f4177428708Ed5fBAaaB9Fc6B65656ADDC7Bc3',
  '0x18bFBAE3C43FE35b9d9820E7BB893994F233AA4b',
  '0x0Ba9F476B2347f1fF5A8Bd6E430802395755e0d3',
  '0x63D2777a76b51d3AF078cde9537AAdf9cbF531c3',
  '0xDB7a005A77D479c6Cc48282d55A0391Fd8735994',
  '0xBe3949aa5E288BF003ACAC5e943a0403c3d29BE4',
  '0x416674Ab0091961B8ac0689242609cdf74ee1908',
  '0xf6c3Ed3c08060F9f9b92E16B279Fff35CF24543e',
  '0x18139B09e77cec145a7cB3ae4d1D63eAE1967138'
]