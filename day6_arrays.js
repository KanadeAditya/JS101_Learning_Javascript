// ARRAYS are data structure
// [] square brackets are used to establish an array 
// the values or strings stored inside array are called elements

arr = [12, 32, 24, 56, 78, 56]
let max = -Infinity
for (i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i]
  }

}
console.log(max)