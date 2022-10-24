// using the function count even numbers between 1 & 15
// use return

function checkNum(N) {

  if (N % 2 == 0) {
    return true;
  } else {
    return false;
  }

}

let count = 0;
for (i = 1; i <= 15; i++) {
  if (checkNum(i) === true) {
    count++
  }
}
console.log(count);

console.log("\n");

//  using same print all odd numbers 

for (j = 1; j <= 15; j++) {
  if (checkNum(j) == false) {
    console.log(j, "is odd");
  }
}

console.log("\n");

// write function to reverse a string 


function reverse(str) {
  new_str = ""
  for (k = 0; k < str.length; k++) {
    new_str += str[str.length - 1 - k]
  }
  return new_str
}

let rev = reverse("aditya")
console.log(rev)

console.log("\n");

// using above check if string is palindrome or not 

let s = "naman"
let p = reverse(s)
if (s === p) {
  console.log(s, "is a palindrome")
} else {
  console.log(s, "is not a palindrome")
}

