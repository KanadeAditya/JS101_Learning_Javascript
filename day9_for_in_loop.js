// for in loops are used for objects because they dont require the data structure to follow indexing

let obj = {
  Name: "Aditya",
  Age: 27,
  Location: "Mumbai",
  School: "Masai",
  Physics: 43,
  Maths: 45,
  Chemistry: 29,
  Eng: 39,
  isMarried: false,
  phone: "9757119148"

}

for (let i in obj) {
  console.log(i)
}
console.log("\n")

for (let j in obj) {
  console.log(obj[j])
}
console.log("\n")

for (let k in obj) {
  console.log(k, ":", obj[k])
}


