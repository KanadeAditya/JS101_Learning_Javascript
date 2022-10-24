// syntax of Function
//  create function for addition and substraction
// this is called as declaration of function


function addition() {
  let a = 10;
  let b = 20;
  console.log("Addition is", a + b);
}

function subtraction() {
  let x = 10;
  let y = 20;
  console.log("Subtraction is", x - y);
}

// Call the function 
addition();
subtraction();

function multiplication() {
  let x = 10;
  let y = 20;
  console.log("Multiplication is", x * y);
}

function division() {
  let x = 10;
  let y = 20;
  console.log("Division is", y / x);
}


division()
multiplication()

console.log("\n")

// print hello world 5 times

function print() {
  console.log("hello world")
}

print();
print();
print();
print();
print();

console.log("\n")
//  or we can use that statement in for loop 

for (i = 1; i <= 5; i++) {
  print();
}



