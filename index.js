const prompt = require("prompt-sync")({ sigint: true });

const coins =[25,10,5,1]
const change = prompt("Enter change? ");
let point =0
let num=change
while(num!=0)
{
  if(num>= coins[0]){
    num=num-coins[0]
    point++;
  }
  /* if(num < coins[0] && num >=coins[1]){
    num=num-coins[1]
    point++;
  } */

  if(num < coins[0] && num >=coins[1]){
    num=num-coins[1]
    point++;
  }
  
  if(num < coins[1] && num >=coins[2]){
    num=num-coins[2]
    point++;
  }
  
  if(num < coins[2] && num >=coins[3]){
    num=num-coins[3]
    point++;
  }
  
}
console.log(point)

