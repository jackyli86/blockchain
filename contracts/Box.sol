// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Box {
    uint256 private _value;
    address public owner = address(0);
    constructor() {
        owner = msg.sender;
    }
    
    // Emitted when the stored value changes
    event ValueChanged(uint256 oldVal, uint256  newVal);

    // Stores a new value in the contract
    function store(uint256 value) public {
        uint256 _oldVal = _value;
        _value = value;
        emit ValueChanged(_oldVal, value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
}