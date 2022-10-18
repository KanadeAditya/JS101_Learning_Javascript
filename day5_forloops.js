// syntax of for loop==>
// for(intaialization;ending condition;inc/dec){
//   code
// }
// ex1. print helloworld 5 times==>

for(let i=1;i<=5;i++)(
  console.log("Hello World")
)


console.log("\n")

//ex2==> print nos from 1-5 horizontally

let sum= " "
for (let a=1; a<=5; a++){
 sum = sum+a+" "
}
console.log(sum)
// if you want to print 5-1 like 54321 you can use sum=a+sum


console.log("\n")
// ex3 ==> print nos, from 10-1

for (let b=10;b>=1;b--){
  console.log(b)
}

console.log("\n")
// print odd nos. from 1-20 in horizontal line

let space =""
for(s=1;s<=20;s++){
  if(s%2==0){
    space+=s+" "
    
  }
}
console.log(space)

console.log("\n")

// ex. give following output ==> 1-*2-*3-*4-*

let sm= " "
for (let d=1; d<=4; d++){
 sm = sm+d+"-*"
}
console.log(sm)

console.log("\n")

// print sum of those no.s that are divisible by 2 or 5 between range of 1 and 15

let r=0
for (e=1;e<=15;e++){
  e%2==0||e%5==0 ? r=r+e : "" ;
  }
console.log("sum of nos. "+r)