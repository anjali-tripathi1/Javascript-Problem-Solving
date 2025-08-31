
//   1. Write a program that prints "Hello World" on console.

console.log("Hello World");


//  2.  Write a function that prints sum of two numbers in console.

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


//    3.   Write a function that calculates and prints the area of rectangle given its width and length.


function calculateArea (length, width) {
    if(typeof length === 'string' || typeof width !== 'number'){
         throw new Error('Please Enter a number')
    } else {
           if(length <= 0){
        throw new Error('Length should be positve numver.')
    }

        if(width <= 0){
        throw new Error('Width should be postive number.')
       }

     console.log(`Area is : ${length * width}`);
    }
  
     
}

calculateArea(6, 5)
calculateArea(5.0, 5)
calculateArea(5.5, 3.3)
// calculateArea(5, -3.3)
// calculateArea(5.5, -0)


const area = function calculateArea (length, width) {
     if(typeof length === 'string' || typeof width !== 'number'){
         throw new Error('Please Enter a number')

    } else {

           if(length <= 0){
           throw new Error('Length should be positve numver.')
      }

        if(width <= 0){
        throw new Error('Width should be postive number.')
       }

      const area = length * width
      return `Area is: ${area}`

    }
} 

console.log(area(89, 63));
// console.log(area(83, -23));
// console.log(area(8, 0));
console.log(area(8.3, 4.5));
