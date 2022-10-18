// chunnu is asking munnu to plant 5 seeds in the the 10 farms that they have but in horizontal manner

for (farm=1 ; farm<=10 ; farm++){
  let bag=""

for( seed = 1 ; seed <= 5 ; seed++){
  bag += "*" + " ";
}

console.log(bag)

}

console.log("\n")

// chunnu is asking munnu to plant  seeds in the the foll. manner ==>
// farm1 ==> 1 seed 
// farm2 ==> 2 seed 
// farm3 ==> 3 seed 
// farm4 ==> 4 seed 
// farm5 ==> 5 seed 

for (farm1=1 ; farm1<=5 ; farm1++){
  let bag1=""
  let bag2=""
  
for( seed1 = 1 ; seed1 <= farm1 ; seed1++){
  bag2 += seed1 + " ";
  bag1 += "*" + " ";
}
console.log(bag2)
console.log(bag1)

}

console.log("\n")


