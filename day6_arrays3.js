// print everything except Dark Knight & phir hera pheri

let movie_name = ["A silent voice", "Dark Knight", "Your Name", "Summer Wars", "Phir Hera Pheri","Fate:Stay Night"];

for (let i=0 ; i<=(movie_name.length-1) ; i++){
  if(movie_name[i]=="Phir Hera Pheri"|| movie_name[i]=="Dark Knight") {
    continue;
  }
  console.log(movie_name[i])
}

console.log("\n")
// IW questions 1

let arr = ["Adi","Harsh","Saloni","Nilesh","Charul","Siddhesh"];

for ( a=0 ; a< arr.length ; a++ ){
  if(arr[a]==arr[0]){
    continue;
    
  }
  console.log(a,arr[a])
}

console.log("\n")
// IW question 2

let data = [1,2,3,4,5,6,7,8,9]
let sum = 0;
let count = 0;

for (b=0 ; b < data.length ; b++) {
  if( data[b]%2==0){
    sum += data[b]
    count++
  }
}
console.log(sum,count)
console.log(sum/count)