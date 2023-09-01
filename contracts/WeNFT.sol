// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract WeNFT is ERC721, Pausable{
    constructor() 
        ERC721("WeNonToken", "WNT") {
    }
}
