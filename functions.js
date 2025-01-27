// // two types

// -void functions
// -returning functions

// returning function
function addition(numberOne, numberTwo){
    return numberOne + numberTwo;
}
// void function

function sum(numberOne, numberTwo){
    let summation = numberOne + numberTwo
    console.log(summation);
}
sum(6,8);
console.log(addition(32,67))

// arrow functions
const subtraction =(numberOne, numberTwo)=>{
    return numberOne - numberTwo;
}
const difference = (numberOne, numberTwo)=>{
    console.log(`The difference is ${numberOne - numberTwo}`);
}
console.log(subtraction(67,32));
difference(99,67);

//function welcome(Hi, Kenneth){
//     let welcome = Hi + Kenneth
 //    console.log(welcome);
//}
//const welcome =(username) =>{
//   console.log(`welcome back ${username}`);
    
//}
//welcome("Kenneth")

let firstName = "John"//global variable
const Welcome =()=>{
    //let SecondName ="James"//local variable 
    console.log(`Welcome back ${firstName}`)
    //console.log(`Hi,${SecondName}`)
}
Welcome("John")