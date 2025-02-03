// Synchronous
// sttep one
console.log("1. Boiling water");

// step two
console.log("2. Water is ready");

//step three
console.log("3. Other tasksie. bring cups");

//Asynchronous
// sttep one
console.log("1. Boiling water");

// step two
console.log("2. Water is ready");

//step three
console.log("3. Other tasksie. bring cups");
setTimeout(()=>{
    console.log("2. Water is ready");
},4000);
console.log("3. Other tasks ie.bring cups");