// this is oj question from DSA assignment
// You are given a number N.

// Let’s say you derive a variable x which is equal to the floor of a number you get when32is divided byN.

// In casexis 0, printToo Low
// In case it is not possible to generate a valid number, print-1
// In all other cases, print x.

let x = 32 / N
if (N === 0) {
  console.log(-1)
} else if (32 % N === 0) {
  console.log(x)
} else {

  for (i = 0; i <= x; i++) {


    if (i >= x - 1) {

      if (i < 1) {
        console.log("Too Low")
        break;
      }

      console.log(i)
    }
  }
}

