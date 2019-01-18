require('dotenv').config();
const steem = require('steem');

const when = new Date();
const token =  process.env.TOKEN;
const memo = (when % 2)?process.env.HIGH:process.env.LOW;
console.log(`${memo} ${token}`);
steem.broadcast.transfer(
  process.env.WIF,
  process.env.ACCOUNT,
  process.env.TO,
  process.env.AMOUNT,
  `${memo} ${token}`,
  function(err, result) {
    if(err){
      console.log(err)
    }
    result
});