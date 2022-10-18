// example 1

let a = [2, 4, 3, 6, 5, 23, 56, 75, 89, 46, 77]
let bag = ""
for (i = 0; i < a.length; i++) {
  if (i % 2 == 1) {
    bag += a[i] + " "
  }
}
console.log(bag)

console.log("\n")

// Given an array find out the number of elements for which both neighbours are greater than the element

arr = [5, 7, 6, 9, 8, 10]
let b = ""
let c = ""
for (i = 1; i < arr.length - 1; i++) {
  if (arr[i - 1] > arr[i] && arr[i + 1] > arr[i]) {
    b += arr[i] + " "
    c++
  }
}
console.log(b)
console.log("Count =", c)

console.log("\n")

// Given string of only lower case print all characters in the stringwhose next element is a vovel if no such char exists print not fount 

let str="unicef"
let space=""
for(i=0 ; i<str.length-1 ; i++){
  if( str[i+1]=="a" || str[i+1]=="e" || str[i+1]=="i" || str[i+1]=="o" || str[i+1]=="u" ){
    space+=str[i]
  }
}
console.log(space)

console.log("\n")
