require('dotenv').config();
const steem = require('steem');
const cron = require('node-cron');

const when = new Date();
const token =  process.env.TOKEN;
const bet = (when % 2)?process.env.HIGH:process.env.LOW;
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