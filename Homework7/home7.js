const  ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//рахує скільки податків ви заплатите як IT - спеціаліст в якійсь з країн
function getMyTaxes(salary) {
   return this.tax * salary
}
console.log(`${getMyTaxes.call(ukraine, 3000)} USD - стільки податків ви заплатите в Україні отримуючи 3000 USD)) `)

//яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні
function getMiddleTaxes() {
   return this.tax * this.middleSalary
}
console.log(`${getMiddleTaxes.call(litva)} USD - стільки податків в середньому платять в Литві`)

//яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні.
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies
}
console.log(`${getTotalTaxes.call(latvia)} USD  - стільки податків платять у Латвії IT-спеціалісти  в загальному `)

//створює обєкт із інформацією (частково виконує 4 завдання)
function getMySalary() {
 const newSalary = +(Math.random() * (2000 - 1500) + 1501).toFixed(2)
   const object = {
      salary: newSalary,
      taxes: +(this.tax * newSalary).toFixed(2),
      profit: +(newSalary - (this.tax * newSalary)).toFixed(2)
   }
   console.log (object)  
}
// викликає функцію яка вище і привязує її аргумент для "this"(розділив на 2 функції для кращої читабельності)
function bar() {
return getMySalary.call(latvia)
}
bar()
let time = setInterval(bar, 10000)






