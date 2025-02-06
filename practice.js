//returning functions
function multiplication(numberone, numbertwo){
    return numberone * numbertwo
}
console.log(multiplication(10,34));

// void function
function multi(number1, number2){
    let multiplication  = number1 * number2
    console.log(multiplication);
}
multi(123,234)

const welcome = (username)=>{
    console.log(`welcome back,${username}`);
}
welcome("kenneth")

let age = 20;
if(age <= 18){
    console.log("minor");
}
else if(age >=18){
    console.log("adult");
}
let password = '2544';
let confirmPassord = '2544'
while(confirmPassord != password){
    console.log("The user is valid")
    break;
}