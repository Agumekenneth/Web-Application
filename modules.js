// .fs

//const fs= require("fs")

//fs.writeFile("code txt","Hello world", (error)=>{
 //   if(error) throw error;
  //  console.log("the file is created")
//})
//fs.appendFile("code,txt", "\n this is line two",(error)=>{
 //   if(error) throw error;
 //   console.log("the line is added")
//})

//fs.readFile("code txt","utf8", (err, data)=>{
//    if(err) throw err;
//    console.log(data)
//})

// path
const path = require("path");
let fullpath = path.join(__dirname,"codetxt")
console.log(fullpath);

// Os
const os = require("os")
console.log(`the free space i have is: ${os.freemem()}`);