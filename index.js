// Code your solutions in this file
let newArray = [];


function writeCards(arr, event){
  
    for(let i = 0; i < arr.length; i++){
      newArray.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
  return newArray;
  
}


function countDown(){
    let i = 0;
    while(i <= 10){
        console.log(i)
        i++;
    }
}