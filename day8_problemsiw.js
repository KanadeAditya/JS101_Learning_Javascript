let day = 31
for (i = 1; i <= 12; i++) {

  if (i === 2) {
    day = 28;
  } else if (i == 4 || i == 6 || i == 9 || i == 11) {
    day = 30;
  } else {
    day = 31
  }

  for (j = 1; j <= day; j++) {
    console.log(i, "-", j)
  }

  console.log("\n")
}

console.log("\n")

// question 2

let count = 0
for (num = 1; num <= 50; num++) {
  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++
    }
  }

  if (count == 2) {
    console.log(num)
  }
}

// question 3

for (a = 1; a <= 10; a++) {
  let bag = ""

  for (b = 1; b <= 10; b++) {
    if (a == 1 || a == 10) {
      bag += "*";
    } else if (b == 1 || b == 10) {
      bag += "*"
    } else {
      bag += " "
    }
  }

  console.log(bag)

}

console.log("\n")