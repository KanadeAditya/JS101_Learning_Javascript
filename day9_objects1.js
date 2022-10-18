let detail1 = ["Aditya", 27, "Mumbai", "Masai"];
let detail2 = [29.43, 45, 39];
let detail3 = ["Eng", "Maths", "Physics", "Chemistry"];


// following is the syntax of objects

let obj = {
  Name: "Aditya",
  Age: 27,
  Location: "Mumbai",
  School: "Masai",
  hobbies: ["chess","Anime","Manga"],
  isMarried: false,
  
 
}
console.log(obj)
console.log("\n")

// there is no concept of indexing in objects as weel as length i.e you cant access elements by using their index
// hence we have to use another method to access which are as follows

// bracket notation method

console.log(obj["Location"]);
console.log(obj["School"])

console.log("\n")
// Dot notation method

console.log(obj.Name);
console.log(obj.Age);

console.log("\n")

// How to update things in object

obj.Age = 24

// How to add things in object

obj["Hobbies"] = "chess"
obj.phone= "9757119148"

console.log(obj)

// There can be multiple strings i.e an array attached to one key value 

obj["Hobbies"] = ["chess", "Anime", "Manga"]

console.log(obj)

// how to delete something in obj

delete obj["isMarried"]

delete obj.Eng

console.log(obj)

// ex.1 Print a char  from hobbies which is array

console.log(obj.Hobbies[2])