require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note pulse quality harvest fork suit general'; 
let testAccounts = [
"0x8ee62bfb84697fad56a4a5070af091dc52509dfd8bf9da5976a10e1862ef4a2b",
"0x204874d39d05c93b59a9710c8fcef4a87f13ded4f728254ba1573850c09af748",
"0x851f1c0a2e09996540290770a343db565246e0c45ea52a4fa4c644e3d58dcc12",
"0x093ee92c0617f72267bb166ef6fb3110b5dd81eb925d636b4cbc7165ce0a0f35",
"0x88f0bcad6c6f836f5b7875a3b720a6c680730ac601037f8fd019bdf898288a06",
"0xd4c284c2021c9439084efeb2f1cde9077a4d77cf1cc78fa868042b2bebd3f48b",
"0x05f0d248de1a0001a3b0f0478446851115a2eb20d448564f705b788f8a0c373a",
"0x360e197149c83ac7c34ec8362742c7a94059be61001165d758175434dde68a91",
"0xdb83e8a6a229b3b6f7b01aa2fe2c3c3835c6a3e6ade62bc121c83564f0279746",
"0x24d75ed83807a780c0643b475701cd24ededab572e16a5e9ea647672470d9d75"
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

