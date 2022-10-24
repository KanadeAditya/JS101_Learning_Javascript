// following is a method in which we make function intelligent by telling it which values to put inside variables

function add(a, b) {
  console.log("Addition is", a + b);
}

add(10, 3);
add(1198, 9654);
add(85, 37);
add(42, 65);

console.log("\n")

// check if no. is prime or not
function prime(N) {
  let count = 0
  for (i = 0; i <= N; i++) {
    if (N % i === 0) {
      count++
    }
  }

  console.log(count===2)
  
}

prime(7)

console.log("\n")

// calling and the returning of the statements 

function sum(a,b){
  return a+b;
}

let ans = sum(12,8);

console.log(ans)

// return of function is an important use case of functions 