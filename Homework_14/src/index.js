// import * as home3 from './home3.js'
import "./home10.css"
import "./home12.css"
import { leadsDegree } from "./For_exp.js"
console.log(leadsDegree(2, 6))
import { getPair } from "./For_exp.js"
console.log(getPair())
import { getRandomArray } from "./For_exp.js"
console.log(getRandomArray(10, 29, 3))
import { getAverageMark } from "./For_exp.js"
import { students } from "./For_exp.js"
console.log(getAverageMark(students[0]))
import { ukraine } from "./For_exp.js"
import { getMyTaxes } from "./For_exp.js"
console.log(getMyTaxes.call(ukraine, 3000))
import { bar } from "./For_exp.js"
console.log(bar())
import { randomColor } from "./For_exp.js"
import { generateBlocks } from "./For_exp.js"
import { generateBlocksInterval } from "./For_exp.js"
generateBlocksInterval()
document.onkeydown = function openMusic(e) {
   const audio = new Audio
   switch (e.code) {
      case "KeyA":
         audio.src = "homemusic10/audioone.mp3"
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