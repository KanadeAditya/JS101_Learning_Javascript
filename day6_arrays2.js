// arrray of movies

let movie_name = ["A silent voice", "Dark Knight", "Your Name", "Summer Wars", "Phir Hera Pheri"];
console.log(movie_name)
console.log("\n")
// if you want to select a certain element of the array  you should use the endex of that particular ekement , The index of arrays starts with 0 ex.=
console.log(movie_name[0])
console.log(movie_name[1])
console.log(movie_name[2])
console.log(movie_name[4])

console.log("\n")
// if you want to know the no of ellememts strngyh 

console.log(movie_name.length)

console.log("\n")
// You can see the last element by index = length-1

console.log(movie_name[(movie_name.length) - 1])
console.log("\n")

// To add at the end of the array we use push 
// to remove at end of array we use pop

movie_name.pop()
movie_name.push("Perfect Blue", "Redline")

console.log(movie_name)
console.log("\n")

// To print the array in a loop

for (i = 0; i < movie_name.length; i++) {
  console.log(movie_name[i])
}
// we can use while loop as well
console.log("\n")

// Spread operator (...)

let arr = [1,2,3];
let data = [4,5,6];

let details= ["Aditya","Mumbai", ...arr, ...data ]
console.log(details)

console.log("\n")

// how to replace an element

details[1]= "Banglore"

details[4] = "Inazuma"

console.log(details)


