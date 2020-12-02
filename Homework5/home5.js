//повертає масив випадкових цілих чисел
function getRandomArray(length, max, min) {
   const randomArray = [];
   do {
randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
   }
   while (randomArray.length < length);
   return randomArray;
}
console.log(getRandomArray(15,100,12));


//рахує середнє арифметичне всіх переданих в неї аргументів
const arr = [3, -5, 2, 3, 2, 6, -4, 3, 9, 7, 7, 2]
function getAverage(array){
   const getAverage = array.filter((item) => {
   return Number.isInteger(item)
})
   .reduce((acum, number) => {
   return acum + number;
   }, 0) / array.length
   return + getAverage.toFixed(2)
}
console.log(getAverage(arr))

//рахує медіану всіх переданих в неї аргументів
function getMedian(array) {
   const sortArr = array.filter((item) => {
      return Number.isInteger(item)
   }).sort((a, b) => {
      return a-b
   })
   let median;
   if (sortArr.length % 2 !== 0) {
      median = sortArr[(sortArr.length - 1) / 2]
   }
   else {
   median = (sortArr[(sortArr.length / 2)-1] + sortArr[(sortArr.length / 2) ]) / 2
}
return median
}
console.log(getMedian(arr))

//порахує кількість чисел більших 0
function countPositiveNumbers(array) {
   const positiveNumbers = array.filter(function filter(number){
      return number > 0;
   })
   return positiveNumbers.length
}
console.log(countPositiveNumbers(arr))

//відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const newArray = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 20, 56, 3, 2]
function getDividedByFive (elements) {
   return elements.filter(function filtered(number) {
      return number %5 ===0
   })
}
console.log(getDividedByFive(newArray));



// розбиває кожне слово на умовні склади по 3 букви
const divideByThree = (word) => {
   let wordArr = word.toLowerCase().split('').filter(char => char !== " ");
   const divider = 3;
   let wordDivArr = [];
   while (wordArr.length >= divider) {
      let smallArr = [];
      for (let i = 0; i < divider; i++) {
         smallArr.push(wordArr.shift());
      }
      wordDivArr.push(smallArr.join(''));
   }
   if (wordArr.length > 0) {
      wordDivArr.push(wordArr.join(''));
   }
   return wordDivArr;
};
console.log(divideByThree('comander'))


document.writeln(`'Функція 1' <br> масив випадкових цілих чисел <br>${getRandomArray(15, 100, 12)} <br>
'Функція 2'<br>середнє арифметичне від всіх  аргументів<br>${getAverage(arr)}<br>
'Функція 3'<br> медіана всіх переданих  аргументів<br>${getMedian(arr) }<br>
'Функція 4'<br>із чисел ${arr}<br>кількість чисел більших 0<br>${countPositiveNumbers(arr)}<br> 
'Функція 5'<br> елементи які діляться на ціло на 5<br>${getDividedByFive(newArray)}<br>
'Функція 6'<br>склади по 3 букви<br>${divideByThree('comander')}<br>
`)