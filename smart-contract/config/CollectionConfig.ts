import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'LetsGoWolf',
  tokenName: 'Lets Go Wolf',
  tokenSymbol: 'LGW',
  hiddenMetadataUri: 'ipfs://QmTXjVKbkbxvbw4sTAM89QtkEPvxFHfGr8kQgV18XMmNrs/hidden.json',
  maxSupply: 9998,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.08,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.13,
    maxMintAmountPerTx: 10,
  },
  contractAddress:"0x28132baAE03129634290d96841767e59e44c27aA",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
