// String datatype
'',""
let firstName ='Kenneth';
let lastName = 'kwimire';
let middleName ='Welcome back ${Last}';

console.log(firstName + lastName);// length of a string
console.log(firstName.toUpperCase());// length of a string

//Boolean Datatypes 
let isStudent = true;
let hasGraduated = false;
 console.log(isStudent && hasGraduated);//and logical operator
 console.log(isStudent || hasGraduated);//or logiacal operator

 let numberList =[1,2,3,4,5,6]
 let numberListTwo =[6,7,4,8,9]
 let fruitList =['apples','mangoes','berries']
 console.log(numberList[3]);
 console.log(fruitList);

 fruitList.push('grapes');
 console.log(fruitList);

 fruitList.pop();
 console.log(fruitList);

 let personObject ={
    "name": "kenneth",
    'gender': "male"
 }
console.log(personObject.gender);

//Arithmetic operators
let numberOne =5;
let numberTwo = 7;
console.log(numberOne * numberTwo);
console.log(numberOne + numberTwo);
console.log(numberOne / numberTwo);

//Comparison operators
let numberSix = 2;
let numberSeven ='2';

console.log(numberSix == numberSeven);//loose equality
console.log(numberSix === numberSeven); //strict equality


/**
 * IF STATEMENTS
 */
// Syntax
// if(condition){
//   logic
//}else if(condition){
//    logic
//}else{
//  logic
//}

//age.xhid,adult, invalid
let age = 0;
if(age < 0){
   console.log('invalid')
}else if(age >= 18){
   console.log('adult')
}else{
   console.log('child')
}

// switch(key){
// case value;
// break;
// default;
//}

let number = 5
switch(number){
   case 1:
      console.log("This is Sunday");
      break;
   case 2:
      console.log("This is Monday")
      break;
   case 3:
      console.log("This is a Tuesday")
      break;
   case 4:
      console.log("This is a Wednesday")
      break;
   case 5:
      console.log("This is a Thursday")
      break;
   case 6:
      console.log("This is a Friday")
      break;
   case 7:
      console.log("This is a Saturday")
      break;
   default:
      console.log("This day does not exist")
      break;
}

let password = "2544";
let confirmPassword ="2544";
if(password === confirmPassword ){
   console.log("Password invalid")
}
else{
   console.log("Passwords aren't the same\n Try again")
}

/**
 * Lopps
 */
// for loops
//for(intialization,condition,increment){
//  results
//}

// print the first 100 numbers
for(let i=0;i<101; i+1){
  console.log(i)
}
   

//while loop
//intialization
//while(condition){
//   results
//   increment
//}
//let i = 0;
//while(i<100){
///  console.log(i)
///   i+=1;
///}
//for in loop //Arrays
let fruitlist =["mangoes","apples","oranges"];
for(fruit in fruitlist){
   console.log(fruitlist[fruit]);
}
// for of loop
for(fruit of fruitlist){
   console.log(fruit);
}