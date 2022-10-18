// Shortcuts to Write increments and decrements
// x=x+20 can  be written as x+=20
// x=x-10 can be written as x-=10
// if you want a increment of only 1 it can be writen as x++ 
// i.e.x=x+1 ==> x++ (post increment) or ++x (pre increment)
// if you want a decrement of only 1 it can be writen as x-- 
// i.e.x=x-1 ==> x-- (post decrement) or --x (pre decrement)
// there is a difference  between post and pre only while assigning to different variable

let x= 20
let y= 30
let a = x++
let b = ++y
console.log(x,a,y,b)

// in post increment/decrement value is assigned first and then the increment/decrement takes place 
// in pre increment/decrement first the value is increased/decreased and then the follwing value is assigned to the variable