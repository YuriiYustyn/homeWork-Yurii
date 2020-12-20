async function getRandomChinese(length=4){
   let randomSigns=''
   let quantity = length
   const sign= () => String.fromCharCode(Date.now().toString().slice(-5))
   let bar = () => new Promise((resolve) => setTimeout(() => { return resolve(sign()) },50))
   while (quantity > 0) {
      randomSigns += await bar()
      quantity--
   }
   return randomSigns
}
getRandomChinese().then((resolve) => console.log(resolve))
