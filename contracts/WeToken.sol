// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WeToken is ERC20, Ownable, Pausable{
    constructor() 
        ERC20("WeToken", "WT") {
        uint256 amount = 100000000 * 10 ** 18;
        _mint(msg.sender, amount);
    }
}
