function* createIdGenerator(number=0) {
   let id = number
   while (true) {
      let current = yield id
      current<0? id--:id++
      let  a = document.createElement("H2")
      a.textContent = `new id ${id}`
      document.querySelector('.text').appendChild(a)
   }
}
const idGenerator = createIdGenerator();
idGenerator.next().value
idGenerator.next().value
idGenerator.next().value
idGenerator.next().value
document.querySelector("#generator").addEventListener('click', function(){
   idGenerator.next()
})
function* newFontGenerator(size) {
   let value = size
   while (true) {
      let editsize = yield value
      editsize === "up"? value+=2:value-=2
   }
}
const fontGenerator = newFontGenerator(14)
document.querySelector('#up').addEventListener('click', function () {
   document.querySelector('.text').style.fontSize = `${fontGenerator.next("up").value}px`
   document.querySelector('#size').textContent=`${document.querySelector('.text').style.fontSize}`
})
document.querySelector('#down').addEventListener('click', function () {
   document.querySelector('.text').style.fontSize = `${fontGenerator.next("down").value}px`
   document.querySelector('#size').textContent = `${document.querySelector('.text').style.fontSize}`
})
