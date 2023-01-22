import React, {useState, useEffect} from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import FlipMove from "react-flip-move";
import axios from 'axios';
import {TwitterContractAddress} from "./config.js";
import {ethers} from "ethers";
import Twitter from "./utils/TwitterContract.json";


function Feed({personal}){
    const [posts, setPosts] = useState([]);

    const getUpdatedTweets = (allTweets, address) => {
     let updatedTweets = [];

     for(let i = 0; i < allTweets.length; i++){
          if(allTweets[i].username.toLowerCase() == address.toLowerCase()){
               let tweet = {
                    'id' : allTweets[i].id,
                    'tweetText': allTweets[i].tweetText,
                    'isDeleted': allTweets[i].isDeleted,
                    'username': allTweets[i].username,
                    'personal': true 
               };
               updatedTweets.push(tweet);
          }else{
               let tweet = {
                    'id': allTweets[i].id,
                    'tweetText': allTweets[i].tweetText,
                    'isDeleted': allTweets[i].isDeleted,
                    'username': allTweets[i].username,
                    'personal': false
               };
               updatedTweets.push(tweet);
          }
     }
     return updatedTweets;

    }

    const getAllTweets = async() => {
     
    }

}


















{/*} prop means property
     prop pass as an object inside component
     prop pass from parent to child comonent
     also callback function can pass through prop from parent to child component
     props are immutable



*/}