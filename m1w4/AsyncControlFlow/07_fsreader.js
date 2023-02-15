//fs? Filesystem?
//A node module that allows us to interact with the file system
const fs = require("fs");
//Read all three text files, and add them up
//How can I add these files together?
//run three readfiles? and add a console.log at the end?
//Can we add some sort of delay to the console.log? Maybe a setTimeout?

let totalSum = 0;
fs.readFile("./pizza",(error, data)=>{
  if(error){
    console.log(error)
    return
  }
  totalSum += Number(data) //data is actually a string
  fs.readFile("./data2.txt", "utf8", (error, data)=>{
    if(error){
      console.log(error)
      return
    }
    totalSum += Number(data) //data is actually a string
    fs.readFile("./data3.txt", "utf8", (error, data)=>{
      if(error){
        console.log(error)
        return
      }
      totalSum += Number(data) //data is actually a string
      console.log(totalSum)
    })
  })
})
// fs.readFile("./data2.txt", "utf8", (error, data)=>{
//   if(error){
//     console.log(error)
//     return
//   }
//   totalSum += Number(data) //data is actually a string
// })
// fs.readFile("./data3.txt", "utf8", (error, data)=>{
//   if(error){
//     console.log(error)
//     return
//   }
//   totalSum += Number(data) //data is actually a string
// })
