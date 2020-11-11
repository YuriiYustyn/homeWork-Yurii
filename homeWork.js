//Base
let priceApples = 15.678;
let priceСherries = 123.965;
let pricePeaches = 90.2345;
let maxPrice = Math.max(priceApples,priceСherries,pricePeaches);
console.log('максимальне число ' + maxPrice );

let minPrice = Math.min(priceApples,priceСherries,pricePeaches);
console.log('мінімальне число '+minPrice );

let costFruits = priceApples + priceСherries + pricePeaches;
console.log('вартість фруктів '+ costFruits + ' грн');

let roundingApples = Math.floor(priceApples);
let roundingСherries =Math.floor(priceСherries);
let roundingPeaches = Math.floor(pricePeaches);
let allFruits = roundingApples + roundingСherries + roundingPeaches; 
let costHundred = Math.ceil(allFruits*0.01)*100;
console.log ('сума товарів округлена до сотень '+ costHundred + ' грн');

let remainder = allFruits % 2;
console.log (' чи є сума всіх товарів (округлена в меншу сторону) парним числом   ' + !!remainder);

let comeback = (500 - costFruits).toFixed(2); 
console.log('решта з 500 грн - '+ comeback + ' грн');

let averagePrice = (costFruits/3).toFixed(2); 
console.log ('середнє значення цін ' + averagePrice +" грн");

let discount = Math.floor(Math.random() * 100) +1;
console.log('знижка становитиме '+ discount + ' %');

let sumRender = ((priceСherries * (100 - discount))/100).toFixed(2);
console.log('сума до оплати з урахуванням знижки '+ sumRender +' грн' );
let exesСherries = priceСherries.toFixed(2)*0.5;

let profit = (sumRender - exesСherries).toFixed(2);
console.log('прибуток становитиме ' + profit +' грн');

//Advanced
console.log(`максимальне число:${maxPrice};
мінімальне число: ${minPrice} 
вартість фруктів: ${costFruits} грн
сума товарів округлена до сотень: ${costHundred} грн
чи є сума всіх товарів (округлена в меншу сторону) парним числом: ${!!remainder}
решта з 500 грн: ${comeback} грн
середнє значення цін: ${averagePrice} грн
знижка становитиме: ${discount} %
сума до оплати з урахуванням знижки: ${sumRender} грн
прибуток становитиме: ${profit} грн
`)