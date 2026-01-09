// console.log('hello world!')
// // String ตัวอักษร
// let fname = 'jhon'
// console.log('name',fname)

// const idcard='123'
// //idcard='456'
// console.log('idcard',idcard)

// fname='Tom'
// fname='aaa'

// //number
// let age= 30
// let height= 150.5
// const pi=3.14

// //boolean


// console.log('name',fname,'age',age)
// //console.log('age',age)

/**
 * +บวก
 * -ลบ
 * *คูณ
 * /หาร
 * %mod หารเอาเศษ
 */
// let number1= 5 //int
// let number2= 10
// let number3= number1+number2
// console.log('Number3',number3)

// let number1= 'tee' //string
// let number2= 'gigi'
// let number3= number1+' '+number2
// console.log('Number3',number3)

//**
// codition stament (if,else,sstich)
// == เท่ากับ
// != ไม่เท่ากับ
// > มากกว่า
// >= มากกว่าเท่ากับ
// < น้อยกว่า
// <= น้อยกว่าเท่ากับ */
// let number1= 5 
// let number2= 3
// let condition= number1>=number2 //boolean(true,false)
// console.log('candition is =',condition)

// let number1= 5
// let number2= 2
//  // if-else conditon
//  if(number1!=number2){
//     console.log('this is if') // do if codition is true
//  } 
//  else if (number1 == number2){
//     console.log('this is else-if')
//  }
//  else {
//     console.log('this is else')
//  }

/**
Grade 
>=80 A
>=70 B
>=60 C
>=50 D
 */

// let score= prompt('Enter your number: ')
// let score=55
// if(score>=80){
//     console.log('Grade: A')//f
// }
// else if(score>= 70){
//     console.log('Grade: B')//f
// }
// else if(score>= 60){
//     console.log('Grade: C')//f
// }
// else if(score>= 50){
//     console.log('Grade: D')//t
// }
// else{
//     console.log('Grade: F')//f
// }

/**
&& เเละ
|| หรือ
! not ไม่
 */

// let number1=5
// let number2=10
//T&&T=T
// let condition= number1>=3 && number2>=5 
// console.log('result of condition',condition)
//T&&F=F
// let condition= number1>=3 && number2>=11 
// console.log('result of condition',condition)
//T||F=T
// let condition= number1>=3 || number2>=11 
// console.log('result of condition',condition)
//F||F=F
// let condition= !(number1>=3) || number2>=11 
// console.log('result of condition',condition)
// let condition= !(number1>=3 || number2>=11)
// console.log('result of condition',condition)

// let number= 20
// if(number%2==0){
//     console.log('You are event.')
// }
// else{
//     console.log('You are odd.')
// }

// let counter = 1
// while(counter<=10){//True-->False
//     console.log('Hi')
//     counter++
// }
// for(let counter =1; counter<=10; counter++){
//     console.log('Hi')
// }

/**
 array
 */

// let age1=20
// let age2=25
// let age3=30
// let ages=[20,25,30]
// //เเทนที่
// ages=[200,100,50]

// console.log('age1 age2 age3',age1,age2,age3)
// console.log('arrat',ages) 
// console.log('index',ages[0])

// //ต่อ array
// ages.push(25)
// console.log('push arry',ages)

// //ลบ array ตัวสุดท้าย
// ages.pop()
// console.log('pop array',ages)

// let ages=[20,25,30,35,40]
// if (ages.includes(30)){
//     console.log('มีเลข 30 อยู่ใน array')
// }

// let ages=[50,20,25,30,35,40]
// ages.sort()
// console.log(ages)

// let name_list =['aa','bb','cc']
// name_list.push('dd')
// console.log('push name_list',name_list)
// name_list.pop()
// console.log('pop name_list',name_list)
// console.log('name_list.length',name_list.length)

// for(let index=0; index<name_list.length;index++){
//     console.log('name_list',name_list[index])
// }

//**
//object */
// let student=[{
//     age:30,name:'aa',grade:'A'
// },
// {
//     age:35,name:'bb',grade:'B'
// }]
// student.push({
//     age:40,name:'cc',grade:'C'
// })
// student.pop()

// for(let index=0;index<student.length;index++){
// console.log('Student number',(index+1))
// console.log('age',student[index].age)
// console.log('name',student[index].name)
// console.log('grade',student[index].grade)
// }

// let score1=55
// let score=65
// let grade=''

// //การประกาศfunction
// function calculat_grade(score){
// if (score>=80){
//     grade='A'
// }else if (score>=70){
//     grade='B'
// }else if (score>=60){
//     grade='C'
// }else if (score>=50){
//     grade='D'
// }else {
//     grade='F'
// }
// return grade
// }

// //การเรียกใช้ function
// let grade1=calculat_grade(score1) //score1=55
// console.log('Grade',grade1)

// let score=[20,30,40,50]
// // let newscore=[]
// for(let index=0;index<score.length;index++){
//     console.log('score',score[index])
//     // if(score[index] >=30){
//     //     newscore.push(score[index])
//     // }
// }

// // score[0]=score[0]*2
// // score[1]=score[1]*2
// // score[2]=score[2]*2
// // score[3]=score[3]*2

// // score=score.map((s) =>{
// //    return s*2
// // })
// // score.forEach((s) =>{   
// //     console.log('forEach Score',s)
// // })

// // let newscore=score.filter((s)=>{
// //     if(s>=30){
// //         return true
// //     }else{
// //         return false
// //     }
// // })

// //ง่ายกว่า
// let newscore=score.filter((s)=>{
//     return s>=30
   
// })

// score.forEach((ns) =>{   
//     console.log('New Score',ns)
// })

let students=[{
    name:'aa',score:'50',grade:'D'
},
{
    name:'bb',score:'80',grade:'A'
}]
let student =students.find((s) =>{
    if(s.name=='aa'){
        return true
    }
})
let double_score = students.map((s)=>{
    s.scpre=s.scpre*2
    return s
})

let hightscore = students.filter((s)=>{
    if(s.score>=60){
        return true
    }
})
console.log(student)
console.log('double_score',double_score)