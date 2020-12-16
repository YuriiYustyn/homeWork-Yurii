document.onkeydown = function openMusic(e) {
const audio= new Audio
   switch (e.code) {
      case "KeyA":
         audio.src = "homemusic10/audioone.mp3"
         document.querySelector("#button1").className  = 'defoult'
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