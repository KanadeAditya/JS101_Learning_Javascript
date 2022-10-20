// find the sum of ellements whose occurence is more than two
let arr = [7, 8, 5, 8, 7, 4, 2, 3, 2];
let obj = {};

for (i = 0; i < arr.length; i++) {
  let k = arr[i];
  if (obj[k] === undefined) {
    obj[k] = 1;
  } else {
    obj[k]++
  }
}
console.log(obj)
// Number() is used to convert the given string into a number

let sum = 0
for (key in obj) {
  if (obj[key] >= 2) {
    sum += Number(key)
  }
}
console.log("Sum =", sum)
console.log("\n")
// print the element whose occurence is 1

for (c in obj) {
  if (obj[c] == 1) {
    console.log(c);
  }

}

