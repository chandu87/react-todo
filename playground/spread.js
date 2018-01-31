// function add(a,b){
//   return a+b;
// }
//
// console.log(add(3,5));
//
// var toAdd= [4,6];
//
// console.log(add(...toAdd));
//
// var groupA = ['chandu','shekar'];
//
// var groupB=['ram','laxman'];
//
// var fin= [4,...groupA,...groupB];
//
// console.log(fin)

var person = ['Andrew', 25];
var personTwo = ['jhon',31];

function greet(name,age){
  return ("hi " + name +" your age is "+age);
}
console.log(greet(...person));
console.log(greet(...personTwo));

var names = ['hrithik', 'kanna'];
var final = ['chiru'];
final = [...final, ...names];
//console.log(final);
final.forEach((name)=>{
  console.log("hi "+ name);
});
