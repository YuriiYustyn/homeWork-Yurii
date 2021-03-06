//Base
const priceApples = 15.678;
const priceСherries = 123.965;
const pricePeaches = 90.2345;
const maxPrice = Math.max(priceApples,priceСherries,pricePeaches);
console.log('максимальне число ' + maxPrice );

const minPrice = Math.min(priceApples,priceСherries,pricePeaches);
console.log('мінімальне число '+minPrice );

const costFruits = priceApples + priceСherries + pricePeaches;
console.log('вартість фруктів '+ costFruits + ' грн');

const roundingApples = Math.floor(priceApples);
const roundingСherries =Math.floor(priceСherries);
const roundingPeaches = Math.floor(pricePeaches);
const allFruits = roundingApples + roundingСherries + roundingPeaches; 
const costHundred = Math.ceil(allFruits*0.01)*100;
console.log ('сума товарів округлена до сотень '+ costHundred + ' грн');

const remainder = allFruits % 2;
console.log (' чи є сума всіх товарів (округлена в меншу сторону) парним числом   ' + !!remainder);

const payment = 500;
const comeback = (payment - costFruits).toFixed(2);
console.log('решта з 500 грн - '+ comeback + ' грн');

const averagePrice = (costFruits/3).toFixed(2); 
console.log ('середнє значення цін ' + averagePrice +" грн");

const discount = Math.floor(Math.random() * 100) +1;
console.log('знижка становитиме '+ discount + ' %');

const sumRender = ((priceСherries * (100 - discount))/100).toFixed(2);
console.log('сума до оплати з урахуванням знижки '+ sumRender +' грн' );
const exesСherries = priceСherries.toFixed(2)*0.5;

const profit = (sumRender - exesСherries).toFixed(2);
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