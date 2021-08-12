const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];


console.log("Kitchen stuff to pack:");


//Using a for loop to console.log each item in array
/*
for(let i = 0; i < packingList.length; i++){
  console.log(packingList[i]);
}
*/


//Below we have used a while loop to go through each item in array 
let i = 0;
while(i < packingList.length){
  console.log(packingList[i]);
  i++
}