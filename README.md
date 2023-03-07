## Retire Carbon Credits

Carbon credits have emerged as a popular way to mitigate the impact of climate change caused by the release of greenhouse gases. A carbon credit is a permit that allows a company or organization to emit a certain amount of carbon dioxide or other greenhouse gases into the atmosphere. As the world moves towards reducing carbon emissions, carbon credits have become an essential tool for companies to offset their carbon emissions.

With the rise of carbon credits, it's not surprising that we're now seeing a new use case for NFTs: retiring carbon credits. Carbon credits can be retired by transferring ownership to a non-operational entity, essentially removing the credit from the market and preventing it from being used by another party to offset their emissions. This process is called carbon credit retirement.

Traditionally, carbon credit retirement has been done through a cumbersome process of paperwork and manual tracking, which can be time-consuming and prone to errors. With the advent of NFTs, carbon credit retirement can now be done in a much simpler and efficient manner.

An NFT can be created to represent ownership of a carbon credit, and when it is retired, the NFT can be burned.

There are several benefits to using NFTs for carbon credit retirement. First, NFTs provide a unique and tamper-proof way of tracking the ownership of carbon credits. This ensures that the credits are retired properly and cannot be used by another party.

Second, NFTs can be easily transferred between parties, making it easy to retire credits from multiple sources. This can help to streamline the carbon credit retirement process, reducing paperwork and time spent on manual tracking.

Third, the use of NFTs can help to increase transparency and accountability in the carbon credit market. The public nature of blockchain technology means that the retirement of carbon credits can be easily tracked and verified, providing greater trust and confidence in the carbon credit market.

The Retire Carbon Credits smart contract is a Solidity contract that extends the ERC721 standard to create non-fungible tokens (NFTs) for carbon credits. It allows users to mint new carbon credits, and then retire them when they have been used to offset carbon emissions.

The contract includes the following features:

-   Minting of carbon credits with associated project data
-   Burning of carbon credits when they have been retired
-   Retrieval of project and retire data associated with a particular token ID
-   Pausable function to stop the token transfer during emergencies

The contract also incorporates the ERC2981 standard, which allows for the implementation of a royalty payment scheme, where a percentage of each transaction can be directed to a designated royalty recipient.

### Usage

To deploy the contract, simply compile it in a Solidity compiler like Remix and deploy it to the Ethereum network. The contract's constructor function sets the default royalty percentage and the royalty recipient's address.

To mint a new carbon credit, call the `safeMint` function and pass in the recipient's address, the URI for the token's metadata, and the project data associated with the token.

To retire a carbon credit, call the `burnToken` function and pass in the token ID, the retire message and the amount of tokens to retire.

The `getProjectData` and `getRetireData` functions can be used to retrieve the project and retire data associated with a particular token ID.

### Code
Let's break down the code and understand the different components of the contract:

    import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
    import "@openzeppelin/contracts/token/common/ERC2981.sol";
    import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
    import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
    import "@openzeppelin/contracts/security/Pausable.sol";
    import "@openzeppelin/contracts/access/Ownable.sol";
    import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
    import "@openzeppelin/contracts/utils/Counters.sol";

These are import statements for various OpenZeppelin libraries used in the contract. These libraries provide commonly used functionality for developing smart contracts and have been audited by the community.

    contract RetireCarbonCredits is ERC721, ERC721Enumerable, ERC721URIStorage, ERC2981, Pausable, Ownable, ERC721Burnable {
This is the declaration of the contract named `RetireCarbonCredits`. The contract inherits from several OpenZeppelin contracts, including ERC721 (for implementing the NFT standard), ERC721Enumerable (for enabling iteration over NFTs), ERC721URIStorage (for storing NFT metadata), ERC2981 (for royalty payments), Pausable (for emergency stop functionality), Ownable (for access control), and ERC721Burnable (for burning NFTs).

    Counters.Counter private _tokenIdCounter;

This is a counter variable that is used to assign unique token IDs to newly minted NFTs.

    uint96 public royaltypercentage;
    address public royaltyaddress;
These are public variables that store the royalty percentage and the address of the account that should receive the royalty payment when the NFT is sold.

    string private url;
This is a private variable that stores the base URI for the NFT metadata.

    struct ProjectData {
        string name;
        uint256 projectTokenId;
        string methodology;
        string region;
        string emissionType;
        string uri;
        address creator;
    }
This is a struct that defines the properties of a carbon credit project that the NFT represents. It includes the project name, token ID, methodology, region, emission type, URI, and the address of the creator.

    struct RetireData{ 
    uint256 retireTokenId; 
    address beneceficiary; 
    string retireMessage; 
    uint256 timeStamp; 
    uint256 amount; 
    }

A struct that contains information related to the retirement of the NFT, including the ID of the NFT being retired (`retireTokenId`), the address of the beneficiary (`beneceficiary`), a message to explain the retirement (`retireMessage`), the timestamp of the retirement (`timeStamp`), and the amount of the retirement (`amount`).

    mapping (uint256 => ProjectData) private _projectData; 
    mapping (uint256 => RetireData) private _retireData;

-   `_projectData`: A private mapping that maps a token ID to a `ProjectData` struct. This is used to store information related to the project associated with the NFT.
-   `_retireData`: A private mapping that maps a token ID to a `RetireData` struct. This is used to store information related to the retirement of the NFT.


    constructor() ERC721("Retire Carbon Credits", "RCC") { royaltypercentage = 150; royaltyaddress = 0xE3506A38C80D8bA1ef219ADF55E31E18FB88EbF4; _setDefaultRoyalty(royaltyaddress ,royaltypercentage ); }

The constructor function initializes the contract and sets the name and symbol of the token to "Retire Carbon Credits" and "RCC", respectively. It also sets the royalty percentage to 150 and the address of the royalty recipient to 0xE3506A38C80D8bA1ef219ADF55E31E18FB88EbF4. Lastly, it calls `_setDefaultRoyalty`, which is not shown in this code snippet, but likely sets up a royalty mechanism for the NFT.

Let's break down the functions in the contract and their purposes:

1.  `_baseURI`: This is an internal function that returns the base URI for the NFT metadata.
    
2.  `pause`: This function pauses the contract and can only be called by the contract owner.
    
3.  `unpause`: This function unpauses the contract and can only be called by the contract owner.
    
4.  `safeMint`: This function creates a new NFT and assigns ownership to the specified address. It also sets the token URI and stores project data associated with the token.
    
5.  `_beforeTokenTransfer`: This is an internal function that is called before a token transfer occurs. It ensures that the contract is not paused and calls the `_beforeTokenTransfer` function in the ERC721 and ERC721Enumerable contracts.
    
6.  `_burn`: This is an internal function that burns an existing token.
    
7.  `burnToken`: This function burns an existing token and stores retire data associated with the token.
    
8.  `ownerOf`: This function returns the owner of a given token ID.
    
9.  `tokenURI`: This function returns the token URI for a given token ID.
    
10.  `supportsInterface`: This function checks whether a given interface is supported by the contract and calls the `supportsInterface` function in the ERC721, ERC2981, and ERC721Enumerable contracts.
    
11.  `getProjectData`: This function returns the project data associated with a given token ID.
    
12.  `getRetireData`: This function returns the retire data associated with a given token ID.


### License

This contract is licensed under the MIT License.



