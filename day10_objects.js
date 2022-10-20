// spread operator in obj

let object = {
  name: "aditya",
  Age:  24
  
}
console.log(object)

let new_obj = {
  ...object,
  Location: "Mumbai",
  School: "Masai"
}
console.log(new_obj)
console.log("\n")

// Given a string print, the number of times each character appears IW question
str="ajhvczzavhan" ;
let obj = {};

for (i=0 ; i< str.length ; i++){
  let k=str[i];
  if(obj[k]=== undefined){
    obj[k] = 1;
  }else{
    obj[k]++
  }
}
console.log(obj)