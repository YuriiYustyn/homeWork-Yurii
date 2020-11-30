const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const studentsBoy = ['Олександр', 'Ігор', 'Олексій'];
const studentsGirl = ['Олена', 'Іра', 'Світлана'];

function getPair () {
   let pair = [];
   for (let i = 0; i < studentsBoy.length; i++) {
      pair.push([studentsBoy[i], studentsGirl[i]]);
   }
   return pair;
}
const pairs = getPair();
console.log(pairs);

function getcompareTask()  {
   let resultNew = [];//накопичує всі елементи result з доданою до кожного темою
   let result = [];//накопичує результати додавання в елемент масиву букву і
   for (let i = 0; i < pairs.length; i++) {
      result.push(pairs[i].join(' і '))//до кожного елементу pairs добавить букву і
      resultNew.push([result[i], themes[i]])// до кожного елемента result додає "тему"
   }
   return resultNew
}
const compareTask = getcompareTask();
console.log(getcompareTask());

function getStudentsMarks ( ){
   let result = [];
   for (let i = 0; i < students.length; i++) {
      result.push([students[i], marks[i]]);
   }
   return result;
}
console.log(getStudentsMarks());

const newCompareTask = Array.from(compareTask)
const max = 5;
const min = 1
const pairsTaskMark = newCompareTask.map((elements) => {
     return elements.push(Math.floor(Math.random() * (max - min + 1)) + min);
      })
console.log(newCompareTask );