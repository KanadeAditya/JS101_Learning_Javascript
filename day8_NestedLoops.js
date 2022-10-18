//  Following is the syntax of nested for loop

let count=0
for(i=1 ; i<=5 ; i++){
  for(j=1 ; j<=3 ; j++){
    
    count++
    console.log(count," ",i,j)
  }
}

// as you can see the inside foor loop executes a total of 5 times individually giving 3 outputs each time 
//  hence in total there are 3*5 = 15 outputs
