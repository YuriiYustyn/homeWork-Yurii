const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const studentsBoy = ['Олександр', 'Ігор', 'Олексій'];
const studentsGirl = ['Олена', 'Іра', 'Світлана'];

getPair =(names) => {
   let pair = [];
   for (let i = 0; i < studentsBoy.length; i++) {
      pair.push([studentsBoy[i], studentsGirl[i]]);
   }
   return pair;
}
const pairs= getPair();
console.log(pairs);

compareTask = () => {
   let resultNew = [];//накопичує всі елементи result з доданою до кожного темою
   let result = [];//накопичує результати додавання в елемент масиву букву і
   for (let i = 0; i < pairs.length; i++) {
      result.push(pairs[i].join(' і '))//до кожного елементу pairs добавить букву і
      resultNew.push([result[i], themes[i]])// до кожного елемента result додає "тему"
   }
   return resultNew
}
const themesPairs = (compareTask());
console.log(themesPairs);

comparesMarks = () => {
   let result = [];
   for (let i = 0; i < students.length; i++) {
      result.push([students[i], marks[i]]);
   }
   return result;
}
const studensMarks = comparesMarks();
console.log(studensMarks);


assignRandomMarks = () => {
   let result = [...themesPairs];
   const max = 5;
   const min = 1;
   for (let i = 0; i < themesPairs.length; i++) {
      result[i].push((Math.floor(Math.random() * ((max - min) + 1) + min)));
   }
   return result;
}
const pairMarks = (assignRandomMarks());
console.log(pairMarks);