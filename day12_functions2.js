// In- built functions ===> read inbuilt functions and research as much as you can and remember on MDN docs

// shift ()==>

let arr = [1, 2, 3, 4, 5, 6]
arr.shift() //opposite of pop 
console.log(arr) //expected output [ 2, 3, 4, 5, 6 ]


// example \\

let A = [1, 2, 3, 4, "aditya"]
let B = A.join(" ")
console.log(B)

// we can convert B back into an array by using split() function

let c = B.split(" ")
console.log(c)

// question create your own split function 

function my_split(str) {
  let new_arr = []
  let bag = ""
  for (i = 0; i < str.length; i++) {

    if (str[i] != " ") {
      bag += str[i]
    } else {
      new_arr.push(bag)
      bag = ""
    }
  }
  new_arr.push(bag)
  return new_arr
}

let z = my_split("Coding is so much fun")
console.log(z)
