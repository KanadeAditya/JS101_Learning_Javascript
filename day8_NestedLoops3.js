// break and continue in nested for loops

for(i=1 ; i<=4 ; i++){
  for(j=1 ; j<=3 ; j++){
    
  if(i==2){
    break;
  }
    console.log(i,j)
  }
}

console.log("\n")
// As we can see the break statement only breaks the for loop which is inside 
// even if we use continue the output is same in above example
// In below example we changed condition j==2

for(i=1 ; i<=4 ; i++){
  for(j=1 ; j<=3 ; j++){
    
  if(j==2){
    continue;
  }
    console.log(i,j)
  }
}

