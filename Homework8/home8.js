class Student  {
   constructor(university, course, fullName, marks, dismiss, recover) {
      this.university = university,
      this.course = course,
      this.fullName = fullName,
      this.marks=[],
      this.dismiss = true,
      this.recover = true  
   }
   
   getInfo() {
      console.log( `Студент ${this.course}го курсу навчається у ${this.university}, ${this.fullName}`)
   }
   get getMarks() {
      //if (this.dismiss) return null
      return this.dismiss?this.marks = [5, 4, 4, 5,]:this.marks = null
   }
   set setMarks(newMark) {
      if (this.dismiss === true)
      return this.marks.push(newMark)
   }
   getAverageMark() {
      let sum = this.marks.reduce((acum, item) => {
         return acum + item
      }, 0)
      return sum/this.marks.length
   }
   getDismiss() {
      return this.marks = null,this.dismiss = false
   }
   getRecover =(()=> {
      return this.dismiss = true,this.marks = this.getMarks
   })
}
//////////////////   Завдання 1
const yurii = new Student("ТНЕУ м.Тернопіль", 2, "Yustyn Yurii")
console.log(yurii)

/////////////////    Завдання 2
yurii.getInfo()

////////////////     Завдання 3 
yurii.getMarks
console.log(yurii.marks)

///////////////      Завдання 4
yurii.setMarks = 5
console.log(yurii.marks)

///////////////      Завдання 5 
console.log(yurii.getAverageMark())

///////////////      Завдання 6
yurii.getDismiss()
console.log(yurii.marks,yurii.dismiss)

///////////////      Завдання 7 
yurii.getRecover()
console.log(yurii.marks,yurii.dismiss)


console.log("////////////////////////////////////////ADWANCED///////////////////////////////////////////////////////////////////////")

////////////////////////////////////////////ADWANCED//////////////////////////////////////////////////

class BudgetStudent extends Student{
   constructor(university, course, fullName, marks, dismiss, recover, scholarship, getScholarship) {
      super(university, course, fullName, marks, dismiss, recover)
      this.scholarship = scholarship
      this.getScholarship = setInterval(() =>{
         return this.dismiss && this.recover && this.getAverageMark() >= 4 ? console.log("Ви отримали 1400 грн. стипендії"): console.log("Нема стипендії")
      }, 30000)
   }
   
}
const oleh = new BudgetStudent("НАУ м.Київ", 4, "Олег")
console.log(oleh)
oleh.getMarks
oleh.getScholarship







