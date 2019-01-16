require('dotenv').config();
const steem = require('steem');

console.log(process.env.AMOUNT)
steem.broadcast.transfer(
  process.env.WIF,
  process.env.ACCOUNT,
  process.env.TO,
  process.env.AMOUNT,
  process.env.MEMO,
  function(err, result) {
    if(err){
      console.log(err)
    }else{
      console.log(result)
    }
});