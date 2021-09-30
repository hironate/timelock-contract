# Time locker token contract for binance smart chain and Ethereum

This utility smart contact can be used to build DAPP which can lock LP Tokens or any BEP20 or ERC20 Tokens (Depends on deployment chain) to smart contract for specific period of time.

### Quick Documentation
You can specify Fees in BNB/ETH or in percent in Smart Contract file. Owner of smart contract can change these values after deploying smart conract.

#### Files and usage
##### .secret
File which contains 12 secret mnemonic phrases of your hd wallet.

##### Deploy smart contact
 - ```npm install```
 - Copiling smart contract ```truffle compile```
 - Deploying smart contract - ```truffle migrate --network=testnet``` Choose network from ```truffle-config.js``` file.
 - Verify smart contract on bscscan/etherscan (API Keys are needed)- ```truffle run verify Airdrop@{ContractAddress} --network testnet```
 - Once smart contract is deployed and verified, you can interect it from bscscan/etherscan

## Authors

* Hiren Kavad

## License

This bundle is dual-licensed under MIT and GPL licenses.

* [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
* [http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)

Use it, change it, fork it, sell it. Do what you will, but please leave the author attribution.

