// IW 1 ==>

let  str = "Reality is often Disappointing"
let count=0
for (i=0 ; i< str.length ;i++){
  if(str[i]==" "){
    count++
  }
}
if(str.length <=1 ){
  console.log("No. of words are ",1)
}else{
console.log("No. of words are ", count+1)
}
