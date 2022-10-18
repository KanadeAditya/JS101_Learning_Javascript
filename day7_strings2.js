// Arrays vs Strings
// incase of string  push or pop doesnot work
// how to update or replace in strings

let str = "Donald";

str[0] = "R"

console.log(str)

// we can see that we cannot change string directly
// Strings are immutable

// but as arrays can be changed 
// we can convert string into an array and than replace or update the string 

let arr = []
for (i = 0; i < str.length; i++) {
  arr.push(str[i])
}

console.log(arr)

arr[0] = "R"
console.log("\n")

//  convert an array to string

let bag = ""
for (j = 0; j < arr.length; j++) {
  bag = bag + arr[j]
}

console.log(arr)
console.log(bag)

console.log("\n")

// instead of this we  can replace a string to another string 


let new_str = ""

for (k = 0; k < str.length; k++) {

  if (str[k] == "D") {
    new_str = "R";

  } else {
    new_str = new_str + str[k]
  }
}
console.log(new_str)


