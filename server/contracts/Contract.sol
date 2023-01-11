// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

contract TwitterContract{

    struct Tweet{
        uint id;
        address username;
        string tweetText;
        bool isDeleted;
    }

    Tweet[] private tweets;

    mapping(uint => address) tweetToOwner;




}
