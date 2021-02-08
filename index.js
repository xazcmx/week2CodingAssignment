//2a
let isHotOutside = false;
//2b
let isWeekday = true;
//2c
let hasMoneyInWallet = true;

//3a
let costOfMilk = 2.99;
//3b
let moneyInWallet = 45.75;
//3c
let thirstLevel = 7;

//4a
let shouldBuyIcecream = isHotOutside && hasMoneyInWallet;
//4b
let willGoSwimming = isHotOutside && isWeekday;
//4c
let isGoodDay = hasMoneyInWallet && isWeekday && isHotOutside;
//4d
let willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= costOfMilk * 2;


console.log("4a " + shouldBuyIcecream);
console.log("4b " + willGoSwimming);
console.log("4c " + isGoodDay);
console.log("4d " + willBuyMilk);
