// examples of if..else Statements ===>
// example 1==>
if ("aditya"=="aditi"){
  console.log("Both names are same")
} else {
  console.log("Names are not equal")
}
console.log("\n")

// example 2==>
let bill_amount=2000
  let min_amount=3999
  let discount = 0.1
if (bill_amount>=min_amount){
  let revised_amt = (bill_amount*(1-discount))
  console.log("Discounted price is ",revised_amt)
}else (
  console.log("Purchase amount is lower than "+min_amount+"\n"+"Billing amount is "+bill_amount)
)
console.log("\n")
// example 3 for multiple conditions 
// for this method as compiler runs from top to bottom,it will stop once any of the statements is true  as in if the statement comes true while running, the compiler will stop and will not execute any lines of code thereafter its kind of a drawback
// observe below example
// use if...else...if...else budget of birthday party==>

let budget = 100
if (budget>=5000){
  console.log("Dominos");
}else if(budget>=2000){
  console.log("Dhaba");
}else if(budget>=500){
  console.log("Vada Paav stall");
}else if(budget>=100){
  console.log("Tea Party");
}else if(budget>=10){
  console.log("eclairs")
}else if(budget==0){
  console.log("Gharich raha")
}

// even though you input 1500 the below conditions are true statements but once the code in line 31 is executed it not go further and give an output , but if the order of code will have been flipped like budget>=10 this condition runs comes first and will always be true and even if you input 5000 or more only budget>=10 will be executed first by the compiler
// hence order of statements is very important , always go in descending order ,or you can say choose an order where all statements should be executed evenely


