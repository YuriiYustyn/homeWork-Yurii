//отримує будь-яке число та виводить найбільшу цифру в цьому числі
const findMax = (number) => +Math.max(...(number + '').split(''));
console.log(findMax(456544));

//визначає ступінь числа
function leadsDegree(x, y) {
   let result = x;
   for (let i = 1; i < y; i++) {
      result *= x;
   }
   return result;
}
console.log(leadsDegree(5, 2));

//форматує ім'я
function editingName(name) {
   let newName = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
   return newName;
}
console.log(editingName("вЛАД"));

//вираховує суму, що залишається після оплати податку
function сalculateNetto(salary) {
   let salaryNetto = +(salary * 0.805).toFixed(2);
   return salaryNetto;
}
console.log(сalculateNetto(2595));

//повертає випадкове ціле число в діапазоні
function pickRandomNumber(min, max) {
   let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
   return randomNumber;
}
console.log(pickRandomNumber(6, 19));

//рахує скільки разів певна буква повторюється
function countLetter(string, leter) {
let counter = 0;
   for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() === leter.toLowerCase()) {
         counter++;
      }
   }
   return counter;
}
console.log(countLetter("Аcталавіста", "а"));

//конвертує долари в гривні та навпаки
function conversion(sum) {
   const exchangeRate = 25;
   let result;
   if (sum.slice(-3) === 'UAH' || sum.slice(-3) === 'Uah' || sum.slice(-3) === 'uah') {
      result = +(sum.slice(0, -3) / exchangeRate);
   }
   else if (sum.slice(-1) === '$') {
      result = exchangeRate * (sum.slice(0, -1))
   }
   else {
      result = 'error, не коректна валюта'
   }
   return result;
}


console.log(conversion('2000$'))

//генерації випадкового паролю(тільки числа)
function getRandomPaswword(length = 8) {
   let password = [];
   password.length = length;
   const randomNumber = () => Math.floor((Math.random()*9)+1)
   for (let i = 0; i < length; i++) {
      password[i] = randomNumber();
   }
   return +password.join("");
}
console.log(getRandomPaswword())

//видаляє всі букви з речення
function deleteLetters(string, letter) {
   newString = [];
   for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() !== letter.toLowerCase()) {
         newString += string[i];
      }
   }
   return newString;
}
console.log(deleteLetters('what is yor name', 'a'));

//перевіряє, чи є слово паліндромом
function isPapindrom(string) {
   const removesGaps = deleteLetters(string, " ").toLowerCase();
   const reverse = removesGaps.split('').reverse().join('');
   return (removesGaps=== reverse);
}
console.log(isPapindrom('я несу гусеня'));

//видалить з речення букви, які зустрічаються більше 1 разу
function removesDuplication(string) {
   let arr = string.toLowerCase().split("");
   let result = "";
   for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
         result += arr[i];
      }
   }
   return result;
}
console.log(removesDuplication('Бісквіт був дуже ніжним'))

document.writeln(`
<div>Функція №1:  ${findMax(45612524)}</div>
<div>Функція №2:  ${leadsDegree(5, 6)}</div>
<div>Функція №3:  ${editingName("юРІй")}</div>
<div>Функція №4:  ${сalculateNetto(14580)}</div>
<div>Функція №5:  ${ pickRandomNumber(4, 12)}</div>
<div>Функція №6:  ${countLetter("Аcталавіста", "а")}</div>
<div>Функція №7:  ${conversion('2560uah')}</div>
<div>Функція №8:  ${getRandomPaswword(length = 8)}</div>
<div>Функція №9:  ${deleteLetters('what is yor name', 'a')}</div>
<div>Функція №10: ${isPapindrom('я несу гусеня')}</div>
<div>Функція №11: ${removesDuplication('Бісквіт був дуже ніжним')}</div>
`)
