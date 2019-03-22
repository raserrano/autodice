require('dotenv').config();
const steem = require('steem');
const cron = require('node-cron');

const when = Math.floor(Math.random() * Math.floor(2));
const token =  process.env.TOKEN;
const bet = (when)?process.env.HIGH:process.env.LOW;
const memo = `${bet} ${token}`
async function doTransfer(){
  await steem.broadcast.transfer(
    process.env.WIF,
    process.env.ACCOUNT,
    process.env.TO,
    process.env.AMOUNT,
    memo,
    function(err, result) {
      if(err){
        console.log(err)
      }
      console.log(memo);
  });
}
 
cron.schedule(`*/${process.env.FREQ} * * * *`, () => {
  doTransfer();
});