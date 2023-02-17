# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Contracts

```
npx hardhat run scripts/deploy.js --network goerli
```

- Local Greeter contract successfully deployed to 0x5FbDB2315678afecb367f032d93F642f64180aa3

- Testnet Greeter contract successfully deployed to Goerli: [0xFbA90d5EEDD411880C54BD891345037501706948](https://goerli.etherscan.io/address/0xfba90d5eedd411880c54bd891345037501706948)

- STEPH2 token [0x65b759B6b8E5fB2552f1A837274da6587f6E7098](https://goerli.etherscan.io/address/0x65b759B6b8E5fB2552f1A837274da6587f6E7098)

## Testing

```
npx hardhat test
```

- followed Hardhat sample testing. removed .owner() test because the simple Token.sol contract doesn't add a contract owner to the state
- watched [Hardhat testing video](https://share.descript.com/view/gwNT6wUGVmH)