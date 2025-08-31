
//   1. Write a program that prints "Hello World" on console

console.log("Hello World");


//  2.  Write a function that prints sum of two numbers in console

// solution-1 

function addTwoNumbers (a, b) {
      console.log(`Sum is : ${a + b}`);
      
}

addTwoNumbers(8, 5 )
addTwoNumbers(638, 236)
addTwoNumbers(638, -236)
addTwoNumbers(63.8, -23.6)

// solution-2

const add = function addTwoNumbers (a, b) {
      const result = a + b
      return `Sum is : ${result}`
}

console.log(add(5, 85));
console.log(add(-5, -45));
console.log(add(-5, 0));
console.log(add(50, 0));
console.log(add(3.5, 2.0));

