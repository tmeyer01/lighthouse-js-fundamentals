/*
The Loopy Lighthouse Assigment- 


We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.


My frist If statement was actually my last else if statement but had to change it so the code editor online would accept my code. kinda whack, just saying 




*/




for (let num = 99; num <= 200; num++){
  
  if (num % 3 === 0 && num % 4 === 0){
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0){
    console.log("Loopy");
  } else if (num % 4 === 0){
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
};