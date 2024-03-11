const ccxt = require('ccxt');
const moment = require('moment');

const binance = new ccxt.binance({
    apiKey: 'jARBYBNZOhq0e0UMfK8hidQDcSlDhl1gyytVMTrVPC9ctn2vvqai9sImchDW5zeS',
    secret: 'iljny5RhDhPapGHK6nXjs264rEBuuftaqfLLEGYI6bBTiZo1pMdcIXv5rQrjQ4OM',
});
binance.setSandboxMode(true)

async function printBalance(){
        const balance = await binance.fetchBalance();
        console.log(balance);
}
async function main(){
       
       const price = await binance.fetchOHLCV('BTC/USDT', '1m', undefined, 20);
       const bPrice = price.map(price => {
            return {
                    timestamp: moment(price[0]).format(),
                    open: price[1],
                    high: price[2],
                    low: price[3],
                    close: price[4],
                    volume: price[5]
            }

       })
       console.log(bPrice);
}
// main()
printBalance()