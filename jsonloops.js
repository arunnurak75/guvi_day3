//for loop
let student=[{"name":"arun","dept":"cse"},
                 {"College":"jce","no":"3109"}]
for(let i=0;i<student.length;i++){
    console.log(student[i])
}
//for in loop
let employee=[{"name":"arun","empid":"5212","section":"A"},
                 {"designation":"manager","work":"IT"}]
for (let i in employee){
    console.log(i,employee[i])
}
//for of loop
let bike=[{"name":"Dio","color":"Black"},{"name":"R15","origin":"Blue"}]
for (let i of bike){
    console.log(i)
}
//for each loop
let fruit=[{"name":"apple"},{"name":"orange"},{"name":"pineapple"}]
fruit.forEach(i=> console.log(i))