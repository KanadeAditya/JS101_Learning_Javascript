// Objects inside arrays ==> this is an actual use case 

let emp_details = [
  { name: "aditya", age: 32, salary: 28000 },
  { name: "Aman", age: 25, salary: 52000 },
  { name: "chunnu", age: 43, salary: 35000 },
  { name: "munnu", age: 20, salary: 21000 },
]

// give names of people with salary above 30k

for (i = 0; i < emp_details.length; i++) {
  if (emp_details[i].salary > 30000) {
    console.log(emp_details[i].name)
  }
}
console.log("\n")

let product = [
  { name: "Macbook", rating: 4.6, price: 180000 },
  { name: "iphone", rating: 4.2, price: 80000 },
  { name: "ipad", rating: 3.8, price: 55000 },
  { name: "Airpods", rating: 4.0, price: 25000 },
]

for (let i = 0; i < product.length; i++) {
  if (product[i].rating >= 4.0) {
    console.log("Product's name is", product[i].name, "price is", product[i].price)
  }
}