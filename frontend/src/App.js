import './App.css';
import {useEffect, useState} from "react";


function App() {
const [currentAccount, setCurrentAccount] = useState("");
const [correctNetwork, setCorrectNetwork] = useState(false);

const connectWallet = async () => {
  try{
    const {ethereum} = window;

    if(!ethereum){
      console.log("Metamask not connected");
      return;
    }

    const chainId = await ethereum.request({method: 'eth_chainId'});
    console.log("connected to chain:", chainId);
    // eth_chainId is RPC method

    const goerliChainId = '0X5';

    if(goerliChainId !== chainId){
      alert("You are not connected to goerli testnet")
      console.log("You are not connected to goerli testnet");
      setCorrectNetwork(false);
      return;
    }else{
      setCorrectNetwork(true);
    }

    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    // eth_requestAccounts is rpc method and it returns string

    console.log("First account", accounts[0]);
    setCurrentAccount(accounts[0]);
  }catch(error){
    console.log("Error connectign to metamask", error);
  }
}

useEffect(() => {
  connectWallet();
})

  return (
    <div className="App">
     {currentAccount === "" ? (
      <button 
        className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105'
        onClick={connectWallet}
      > Connect Wallet
      </button>
     ) : correctNetwork ? (
      <div className='app'>
        <div></div>
      </div>
     ) : (
      <div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl'>
        <div>===================</div>
        <div>Please connect to Goerli testnet and reload the page</div>
        
        <div>===================</div>

      </div>
     )}
    </div>
  );
}

export default App;
