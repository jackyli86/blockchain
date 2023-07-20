// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract MyFirstToken is ERC20, Pausable{
    constructor() 
        ERC20("JJ Token", "JJT") {
        uint256 amount = 100000000 * 10 ** 18;
        _mint(msg.sender, amount);
    }
}
