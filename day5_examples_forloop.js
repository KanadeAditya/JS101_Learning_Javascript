// 

let num = 7
for (i = num; i >= 1; i--) {

}
console.log(num)

console.log("\n")

// calculate average of even nos in 1-50

let sum = 0
let count = 0
for (a = 1; a <= 50; a++) {
  if (a % 2 == 0) {
    sum = sum + a
    count++

  }
}
console.log(sum, count)
console.log(sum / count)

console.log("\n")

// using continue in for ==>

for (let d = 1; d <= 5; d++) {

  if (d == 3) {
    continue
  }
  console.log(d)
}


