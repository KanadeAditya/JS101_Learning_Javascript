// syntax of while loops
//Ln1.  (starting position/intialization)
//Ln2.  while(ending loop condition) {
//Ln3.  (statement code)compile repetative or in loop
//Ln4.   condition for increment/decrement 
//     }
//  now the loop will compile from 
// Ln1==>Ln2==>Ln3==>Ln4==>Ln2==>Ln3==>Ln4==>Ln2==>Ln3==>Ln4 this will keep on going until the ending condition is satisfied or it should give a false value at Ln2
// after (ending loop condition) gives false the compiler will stop
// ex. Print the counting from 1 to 10 ==>

let x = 1
while (x <= 10) {
  console.log(x)
  x++
}
console.log("\n")

// break statement is used to stop the loop

let y = 1
while (y <= 10) {
  console.log(y)
  y++;
  if (y == 5) {
    break;
  }

}
console.log("\n")

// Continue skips everything written below it and goes back to starting of loop
let z = 0
let sum = 0
let count = 0
while (z <= 100) {
  ++z;


  if (z % 2 == 1) {
    continue;
  }
  sum = sum + z
  count++



}
console.log(sum , count)
console.log(sum / count)
// BEWARE where you use continue
// upon the circumstance you may generate infinite outputs if continue is used incorrectly


