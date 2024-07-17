// function com(x,y){
    
//     return((x+y)< 100 ? "true" : "false");
// }
// var x = com(100,20)
// console.log(x);

// function tempreture(x){
    
//     return(x >= 30 ? "HOT" : "Cold");
// }
// var temp = tempreture(29)
// console.log(temp);

// function input(x){
//     return Number(x)
// }
// var num = input("4")
// console.log(num);
// console.log(typeof num);

//==================4====================

// for(let i=0;i<4;i++)
// {
//     for(let j=0;j<=i;j++)
//     {
//         document.write('*')
//     }
//     document.writeln('<br>')
// }

// //======================5===========

// document.getElementById("sum").addEventListener("click",function(){
//     var num1 = Number(prompt("Inter first number"))
//     var num2 = Number(prompt("Inter second number"))

//     document.write(sum(num1, num2))
//     var res = sum(num1, num2)
//     console.log(res);
// })

// function sum(x,y) {
//     return x+y;
// }


// ==========6=============
// function ID() {
//     var Name = prompt("Inter Your Name")
//     var BY
//     if (isNaN(Name)) {
//         var bool1 = true
//         while (bool1) {
//             BY = Number(prompt("Inter your birth year"))
//             if (!isNaN(BY) && BY < 2010) {
//                 bool1 = false
//             }
//         }
//     var Age = 2024 - BY    
//     document.write(
//     "Name: "+ Name + "<br>" +
//     "Birth Year: " + BY + "<br>" +
//     "Age: " + Age)    
//     }
//     else{
//         ID()
//     } 
// }
// ID()
   
//========7============
// function splitstrjoin(strin){
//     var characters = []
//     for (var i = 0; i < strin.length; i++) {
//         characters.push(strin[i])
//     }
//     for (let j = 0; j < characters.length; j++) {
        
//         for (let k = 0; k < characters.length - 1; k++) {
//             if (characters[k] > characters[k+1]) {
//                 var t = characters[k]
//                 characters[k] = characters[k+1]
//                 characters[k+1] = t
//             }
            
//         }

//     var returnstr = ""    
//     }
//     for (let l = 0; l < characters.length; l++) {

//         returnstr+= characters[l]
//     }
//     return returnstr
// }
// var returnedstring = splitstrjoin("cwqtryzacde")
// console.log(returnedstring);

// //===================8=================
    
// function facu(x) {
//     switch (x) {
//         case "FCI":
//             return "You’re eligible to Programming tracks"
//             break;
//         case "Engineering":
//             return"You’re eligible to Network and Embedded tracks"
//             break;    
//         case "Commerce":
//             return"You’re eligible to ERP and Social media tracks"
//             break;
//         default:
//             return"You’re eligible to SW fundamentals track"
//             break;
//     }
// }

//=========================-9===========

// function head(){
//     for (let i = 1; i <= 6; i++) {
//         document.writeln("<h" +i +">welcone to my page </h"+i+">")
//     }
//     return
// }
// head()
//======================10==============

// function math() {
//     var pr = prompt("enter math expression")
//     return pr;
// }
// var equation = math()
// alert("You entered: " + equation + "and the result is: " + eval(equation))

//=========================11===========

// 1- Try this code using strict mode and without strict mode, what’s the 
// difference? And why? 
"use strict"                     
// function foo() { 
// var x; 
// x = 5; 
// y = 6;    return x + y; 
// } 
// console.log(foo()); 
// 2- Will this code work with strict mode? Explain why?  
var y;  
y=10;  
x = 5;  
console.log(x);  
console.log(y);  
var x;  
//What’s the value of y variable in the following code? And why? 
// var x = 5;  
// console.log(x);  
// console.log(y);  
// var y = 7;  
//What are the expected errors (2 errors or undefined output) from the 
//following code? And why? What’s the difference between var & let? 
function test(){ 
for (let i = 0; i < 10; i++) { 
alert(i); 
alert (x);               
let x=10; 
} 
console.log(i);                     
}
test()













   