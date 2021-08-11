//Function that uses console to display Hello and the name of person

/*

const sayHello = (name) =>{
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

*/


//Function that use return (Wont show up in console, unless console.log used on varible that stores value of the function )

const returnSayHello = (name) =>{
  return "Hello, " + name;

}

let greeting = returnSayHello('John');
console.log(greeting);

