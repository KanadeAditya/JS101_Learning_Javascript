// how to generate substrings
// an empty string is also a substring but it is hardly used 
let str = "abcd"
let c=""
for (k = 0; k < str.length; k++) {
    c += str[k]
    console.log(c)
  }
console.log("\n")


// as we can see at k=0 we get substrings present at index zero
//similarly for k=1 we'll get all substrings at index one


for (i = 0; i < str.length; i++) {
  let bag = ""
  for (j = i; j < str.length; j++) {
    bag += str[j]
    console.log(bag)
  }
  
}

// now using a nested for loop we can change the index value with the outer loop and print all the substrings

// now lets do the same thing using arrays

arr=[1,2,3,4,5,6,7]
for (i = 0; i < arr.length; i++) {
  let bag = []
  for (j = i; j < arr.length; j++) {
    bag.push(arr[j])
    console.log(bag)
  }
  
}