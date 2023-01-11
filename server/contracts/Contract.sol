// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

contract TwitterContract{

    event AddTweet(address recipient, uint tweetId);

    struct Tweet{
        uint id;
        address username;
        string tweetText;
        bool isDeleted;
    }

    Tweet[] private tweets;

    mapping(uint => address) tweetToOwner;

    function addTweet(string memory tweetText, bool isDeleted) external{
        uint tweetId = tweets.length;
        tweets.push(Tweet(tweetId, msg.sender, tweetText, isDeleted));
        tweetToOwner[tweetId] = msg.sender;
        emit AddTweet(msg.sender, tweetId);
    }

    


}
