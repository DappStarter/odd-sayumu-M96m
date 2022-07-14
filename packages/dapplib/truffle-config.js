require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area traffic bleak rival remind plastic coral light army gift'; 
let testAccounts = [
"0xf786265f93c9561e32b026ced952d177a0c48ee3dacada6e9dce7e8772d0fa0b",
"0xb2c303187b4258911b87a4b15ed544399366f004864ee5427d8fe71f9be89bc4",
"0xa98e4f366878df480d94710316a791b369d130b15d5d828c9e3b45d40d8abc34",
"0x2a91f1aadba9a5d91b1510a3f044d7237cdbd990a94c7b06d3da9e98c8ff4849",
"0x7dc21a675fc5b5e0f2bc87d6e78b962759aaa67793adb40d0cd5336e10f3208d",
"0x8092219edfb8cefbb524108a69e91dc75e173221df3eef849ff1c8538e423c7d",
"0xe3e9cae57f6a5a17e27e599176b813ea6e2e292d084f553fe0b20801808605d2",
"0x8700c665a7657e5f4ccb09d9a858c09bd216b6b3a4551c3e3d800dfda74b44f2",
"0x26cca3bcd601662b228fb61f5e596073db0c7a8a798c38f4a10bf8b4cdffba04",
"0x0963a91dccc055ad8992eec80b95f620d95b9df742f60c324705040f54ec1ea7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

