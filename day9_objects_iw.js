// Q. no. 1

let friends_list = ["Aditya", "Saloni", "Nilesh", "Aditya", "Nilesh", "Harsh", "Siddesh", "Charul"];

// we have to convert the array into an object

let new_list = {};

for (i = 0; i < friends_list.length; i++) {
  let key = friends_list[i];
  new_list[key] = 1;
}

console.log(new_list)

// here we updated the repeating elements in the object by replacing them do the dry run to understand