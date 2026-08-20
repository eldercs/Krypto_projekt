import CryptoConvert from "crypto-convert";

const convert = new CryptoConvert();

await convert.ready();

console.log(convert.BTC.USD(1))