//Base
const priceApples = 15.678;
const priceСherries = 123.965;
const pricePeaches = 90.2345;
const maxPrice = Math.max(priceApples, priceСherries, pricePeaches);
console.log('максимальне число ' + maxPrice);

const minPrice = Math.min(priceApples, priceСherries, pricePeaches);
console.log('мінімальне число ' + minPrice);

const costFruits = priceApples + priceСherries + pricePeaches;
console.log('вартість фруктів ' + costFruits + ' грн');

const roundingApples = Math.floor(priceApples);
const roundingСherries = Math.floor(priceСherries);
const roundingPeaches = Math.floor(pricePeaches);
const allFruits = roundingApples + roundingСherries + roundingPeaches;
const costHundred = Math.ceil(allFruits * 0.01) * 100;
console.log('сума товарів округлена до сотень ' + costHundred + ' грн');

const remainder = allFruits % 2;
console.log(' чи є сума всіх товарів (округлена в меншу сторону) парним числом   ' + !!remainder);

const payment = 500;
const comeback = +(payment - costFruits).toFixed(2);
console.log('решта з 500 грн - ' + comeback + ' грн');

const averagePrice = +(costFruits / 3).toFixed(2);
console.log('середнє значення цін ' + averagePrice + " грн");

const max = 50;
const min = 5;
const discount = Math.floor(Math.random() * ((max - min) + min + 1));
console.log('знижка становитиме ' + discount + ' %');

const sumRender = +((priceСherries * (100 - discount)) / 100).toFixed(2);
console.log('сума до оплати з урахуванням знижки ' + sumRender + ' грн');
const exesСherries = + priceСherries.toFixed(2) * 0.5;

const profit = + (sumRender - exesСherries).toFixed(2);
console.log('прибуток становитиме ' + profit + ' грн');

//Advanced
document.writeln(`максимальне число:${maxPrice};<br>
мінімальне число: ${minPrice} <br>
вартість фруктів: ${costFruits} грн<br>
сума товарів округлена до сотень: ${costHundred} грн<br>
чи є сума всіх товарів (округлена в меншу сторону) парним числом: ${!!remainder}<br>
решта з 500 грн: ${comeback} грн<br>
середнє значення цін: ${averagePrice} грн<br>
знижка становитиме: ${discount} %<br>
сума до оплати з урахуванням знижки: ${sumRender} грн<br>
прибуток становитиме: ${profit} грн<br>
`)