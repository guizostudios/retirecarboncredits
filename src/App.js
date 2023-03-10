import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import AddNFT from './components/AddNFT';
import RetireNFT from './components/RetireNFT';
import retirecarboncredits from './abis/nft.abi.json';
import React, { useState, useEffect } from 'react';

/*
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";


const web3 = new Web3("https://alfajores-forno.celo-testnet.org");
const kit = newKitFromWeb3(web3);

const contractAddress = "0x727e5668a14baDBDEFCF15F8438194ba35EfF284";
const ERC20_DECIMALS = 18;
*/
function App() {
  const [celoBalance, setCeloBalance] = useState(0);
  const [contractAddress, setcontract] = useState(null);
  const [address, setAddress] = useState(null);
  const [kit, setKit] = useState(null);
  const [addtoNFT, setaddtoNFT] = useState([]);
  const [retiretoNFT, setretiretoNFT] = useState([]);

  const connectCeloWallet = async () => {
    if (window.celo) {
      try {
        await window.celo.enable();
        const web3 = new Web3(window.celo);
        let kit = newKitFromWeb3(web3);

        const accounts = await kit.web3.eth.getAccounts();
        const user_address = accounts[0];

        kit.defaultAccount = user_address;

        await setAddress(user_address);
        await setKit(kit);

      } catch (error) {
        console.log('There is an error')
        console.log({ error });
      }
    } else {
      console.log("please install the extension");
    }
  };

  useEffect(() => {
    connectCeloWallet();
  }, []);

  useEffect(() => {
    if (kit && address) {
      return getBalance();
    } else {
      console.log("no kit or address");
    }
  }, [kit, address]);


  const getBalance = async () => {
    
    const balance = await kit.getTotalBalance(address);
    const celoBalance = balance.CELO.shiftedBy(-ERC20_DECIMALS).toFixed(2);

    const contract = new kit.web3.eth.Contract(retirecarboncredits, contractAddress);
    setcontract(contract);
    setCeloBalance(celoBalance);
  };

    // function to mint the NFT
    const mintNFT = async (_name,  _image, _to, _description, _region, _emission) => {
      try {
  
        await contract.methods
          .safeMint(
            _name,
            _image,
            _to,
            _description,
            _region,
            _emission
          )
          .send({ from: address });
  
      } catch (error) {
        console.log(error);
      }
  
    }
 
  return (

    <div className="content">
      <Header celo = {celoBalance}/>
      <Banner />
      <AddNFT addToNFT={addtoNFT} />
      <RetireNFT retireToNFT={retiretoNFT} />


    </div>

  );
}

export default App;
