

//визначає ступінь числа
export function leadsDegree(x, y) {
   let result = x;
   for (let i = 1; i < y; i++) {
      result *= x;
   }
   return result;
}

export const studentsBoy = ['Олександр', 'Ігор', 'Олексій'];
export const studentsGirl = ['Олена', 'Іра', 'Світлана'];

export function getPair() {
   let pair = [];
   for (let i = 0; i < studentsBoy.length; i++) {
      pair.push([studentsBoy[i], studentsGirl[i]]);
   }
   return pair;
}
export function getRandomArray(length, max, min) {
   const randomArray = [];
   do {
      randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
   }
   while (randomArray.length < length);
   return randomArray;
}
// console.log(getRandomArray(10, 29, 3))

export const students = [{
   name: "Tanya",
   course: 3,
   subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
   }
}, {
   name: "Victor",
   course: 4,
   subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
   }
}, {
   name: "Anton",
   course: 2,
   subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
   }
}]

export function getAverageMark(student) {
   const Mark = Object.values(student.subjects)
   const allMark = Mark[0].concat(Mark[1]).concat(Mark[2])
   const result = allMark.reduce((acum, marks) => {
      return acum + marks
   })
   return + (result / allMark.length).toFixed(2)
}
export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
export function getMyTaxes(salary) {
   return this.tax * salary

}

export function bar() {
   const priceApples = 15.678;
   const roundingApples = Math.floor(priceApples)
   return roundingApples
}




export function randomColor() {
   const quantityColor = 16777216
   return `#${Math.floor(Math.random() * quantityColor).toString(16)}`
}

export function generateBlocks() {
   let bigSquare = document.querySelector('.bigSquare')
   const bigSquareSize = 50
   const heightWidth = 5
   bigSquare.style.width = `${bigSquareSize * heightWidth}px`
   bigSquare.style.display = 'flex'
   bigSquare.style.flexWrap = 'wrap'
   bigSquare.innerHTML = ""
   for (let i = 0; i < heightWidth * heightWidth; i++) {
      const square = document.createElement('div')
      square.style.width = `${bigSquareSize}px`
      square.style.height = `${bigSquareSize}px`
      square.style.background = randomColor()
      square.style.borderRadius = "8px"
      bigSquare.append(square)
   }
}
export function generateBlocksInterval() {
   setInterval(generateBlocks, 1000)
}

export function openMusic(e) {
   const audio = new Audio
   switch (e.code) {
      case "KeyA":
         audio.src = "./homemusic10/audioone.mp3"
         document.querySelector("#button1").className = 'defoult'
         setTimeout(function () { document.querySelector("#button1").className = "el" }, 500)
         break
      case "KeyS":
         audio.src = "homemusic10/audiotwo.mp3"
         document.querySelector("#button2").className = 'button2'
         setTimeout(function () { document.querySelector("#button2").className = "el" }, 500)
         break
      case "KeyD":
         audio.src = "homemusic10/audioseven.mp3"
         document.querySelector("#button3").className = 'button3'
         setTimeout(function () { document.querySelector("#button3").className = "el" }, 500)
         break
      case "KeyF":
         audio.src = "homemusic10/audiofour.mp3"
         document.querySelector("#button4").className = 'button4'
         setTimeout(function () { document.querySelector("#button4").className = "el" }, 500)
         break
      case "KeyG":
         audio.src = "homemusic10/audiofive.mp3"
         document.querySelector("#button5").className = 'button5'
         setTimeout(function () { document.querySelector("#button5").className = "el" }, 500)
         break
      case "KeyH":
         audio.src = "homemusic10/audioseex.mp3"
         document.querySelector("#button6").className = 'button6'
         setTimeout(function () { document.querySelector("#button6").className = "el" }, 500)
         break
      case "KeyJ":
         audio.src = "homemusic10/audioseven.mp3"
         document.querySelector("#button7").className = 'button7'
         setTimeout(function () { document.querySelector("#button7").className = "el" }, 500)
         break
   }
   audio.play()
}