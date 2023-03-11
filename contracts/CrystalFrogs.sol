// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/finance/PaymentSplitter.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract CrystalFrogs is
    ERC721,
    Ownable,
    ReentrancyGuard,
    PaymentSplitter
{
    using Strings for uint256;
    using Counters for Counters.Counter;

    bytes32 public root;
    bytes32 public freeRoot;

    address proxyRegistryAddress;

    uint256 public maxSupply = 5000;

    string public baseURI;
    string public notRevealedUri = "ipfs://Qmbth1DdxejM5qwCLrr7mPXmWPV4qdEzPCU2fB3kSmuccn/hidden.json";
    string public baseExtension = ".json";

    bool public paused = true;
    bool public revealed = false;
    bool public freesaleM = false;
    bool public presaleM = false;
    bool public publicM = false;

    uint256 freeAmountLimit = 5;
    uint256 presaleAmountLimit = 3;
    mapping(address => uint256) public _freeClaimed;
    mapping(address => uint256) public _presaleClaimed;

    uint256 _price = 30000000000000000; // 0.03 ETH
    uint256 _freePrice = 0; // 0 ETH
    uint256 _preSalePrice = 25000000000000000; // .025 ETH

    Counters.Counter private _tokenIds;

    uint256[] private _teamShares = [20, 21, 21, 22, 11, 5];
    address[] private _team = [
        0x78555568A00445cc6EaAF8597A01Af7e2Bc626A8, // Test Project Funds Account gets 20% of the total revenue
        0x795f8fcF04726557f126799545Fc4B0d1C49b058, // Test Artist Account gets 21% of the total revenue
        0x118dd453DEDb56461630042b5C45ADF9BeEd9bEE, // Test Project Director Account gets 21% of the total revenue
        0xc1B8dc8291b51e11DA438743bE806c7D30fb0Bd3, // Test Developer Account gets 22% of the total revenue
        0x46dbdC19a77c5bA6eFf83cC33dbbe41ff9C9F41b, // Test Marketing Manager Account gets 11% of the total revenue
        0x2C03454F34D8515A803BCbB711aA37EC6a88F148 // Test Collab Manager Account gets 5% of the total revenue
    ];

    constructor(string memory uri, bytes32 merkleroot, bytes32 freeMerkleRoot, address _proxyRegistryAddress)
        ERC721("CrystalFrogs", "FROGS")
        PaymentSplitter(_team, _teamShares)
        ReentrancyGuard()
    {
        root = merkleroot;
        freeRoot = freeMerkleRoot;
        proxyRegistryAddress = _proxyRegistryAddress;

        setBaseURI(uri);
    }

    function setBaseURI(string memory _tokenBaseURI) public onlyOwner {
        baseURI = _tokenBaseURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function reveal() public onlyOwner {
        revealed = true;
    }

    function setFreeMerkleRoot(bytes32 freeMerkleRoot)
    onlyOwner
    public
    {
        freeRoot = freeMerkleRoot;
    }

    function setMerkleRoot(bytes32 merkleroot)
    onlyOwner
    public
    {
        root = merkleroot;
    }

    modifier onlyAccounts () {
        require(msg.sender == tx.origin, "Not allowed origin");
        _;
    }

    modifier isValidFreeMerkleProof(bytes32[] calldata _proof) {
         require(MerkleProof.verify(
            _proof,
            freeRoot,
            keccak256(abi.encodePacked(msg.sender))
            ) == true, "Not allowed origin");
        _;
   }

    modifier isValidMerkleProof(bytes32[] calldata _proof) {
         require(MerkleProof.verify(
            _proof,
            root,
            keccak256(abi.encodePacked(msg.sender))
            ) == true, "Not allowed origin");
        _;
   }

    function togglePause() public onlyOwner {
        paused = !paused;
    }

    function toggleFreeSale() public onlyOwner {
        freesaleM = !freesaleM;
    }

    function togglePresale() public onlyOwner {
        presaleM = !presaleM;
    }

    function togglePublicSale() public onlyOwner {
        publicM = !publicM;
    }

    function freeSaleMint(address account, uint256 _amount, bytes32[] calldata _proof)
    external
    payable
    isValidFreeMerkleProof(_proof)
    onlyAccounts
    {
        require(msg.sender == account,          "CrystalFrogs: Not allowed");
        require(freesaleM,                       "CrystalFrogs: OG Mint is OFF");
        require(!paused,                        "CrystalFrogs: Contract is paused");
        require(
            _amount <= freeAmountLimit,      "CrystalFrogs: You can not mint so much tokens");
        require(
            _freeClaimed[msg.sender] + _amount <= freeAmountLimit,  "CrystalFrogs: Only 2 Free Mints per OG");


        uint current = _tokenIds.current();

        require(
            current + _amount <= maxSupply,
            "CrystalFrogs: max supply exceeded"
        );
        require(
            _freePrice * _amount <= msg.value,
            "CrystalFrogs: Not enough ethers sent"
        );

        _freeClaimed[msg.sender] += _amount;

        for (uint i = 0; i < _amount; i++) {
            mintInternal();
        }
    }

    function preSaleMint(address account, uint256 _amount, bytes32[] calldata _proof)
    external
    payable
    isValidMerkleProof(_proof)
    onlyAccounts
    {
        require(msg.sender == account,          "CrystalFrogs: Not allowed");
        require(presaleM,                       "CrystalFrogs: WL Mint is OFF");
        require(!paused,                        "CrystalFrogs: Contract is paused");
        require(
            _amount <= presaleAmountLimit,      "CrystalFrogs: You can not mint so much tokens");
        require(
            _presaleClaimed[msg.sender] + _amount <= presaleAmountLimit,  "CrystalFrogs: You can not mint so much tokens");


        uint current = _tokenIds.current();

        require(
            current + _amount <= maxSupply,
            "CrystalFrogs: max supply exceeded"
        );
        require(
            _preSalePrice * _amount <= msg.value,
            "CrystalFrogs: Not enough ethers sent"
        );

        _presaleClaimed[msg.sender] += _amount;

        for (uint i = 0; i < _amount; i++) {
            mintInternal();
        }
    }

    function publicSaleMint(uint256 _amount)
    external
    payable
    onlyAccounts
    {
        require(publicM, "CrystalFrogs: Public Mint is OFF");
        require(!paused, "CrystalFrogs: Contract is paused");
        require(_amount > 0, "CrystalFrogs: zero amount");

        uint current = _tokenIds.current();

        require(
            current + _amount <= maxSupply,
            "CrystalFrogs: Max supply exceeded"
        );
        require(
            _price * _amount <= msg.value,
            "CrystalFrogs: Not enough ethers sent"
        );


        for (uint i = 0; i < _amount; i++) {
            mintInternal();
        }
    }

    function mintInternal() internal nonReentrant {
        _tokenIds.increment();

        uint256 tokenId = _tokenIds.current();
        _safeMint(msg.sender, tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        if (revealed == false) {
            return notRevealedUri;
        }

        string memory currentBaseURI = _baseURI();

        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        baseExtension
                    )
                )
                : "";
    }

    function setBaseExtension(string memory _newBaseExtension)
        public
        onlyOwner
    {
        baseExtension = _newBaseExtension;
    }

    function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
        notRevealedUri = _notRevealedURI;
    }

    function totalSupply() public view returns (uint) {
        return _tokenIds.current();
    }

    /**
     * Override isApprovedForAll to whitelist user's OpenSea proxy accounts to enable gas-less listings.
     */
    function isApprovedForAll(address owner, address operator)
        override
        public
        view
        returns (bool)
    {
        // Whitelist OpenSea proxy contract for easy trading.
        ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
        if (address(proxyRegistry.proxies(owner)) == operator) {
            return true;
        }

        return super.isApprovedForAll(owner, operator);
    }
}



/**
  @title An OpenSea delegate proxy contract which we include for whitelisting.
  @author OpenSea
*/
contract OwnableDelegateProxy {}

/**
  @title An OpenSea proxy registry contract which we include for whitelisting.
  @author OpenSea
*/
contract ProxyRegistry {
    mapping(address => OwnableDelegateProxy) public proxies;
}