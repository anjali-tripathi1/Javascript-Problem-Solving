
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

// solution-1

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


// solution-2


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


//   4. Write a function that tells if a given number is Even or Odd.

// solution-1

function checkEvenOdd (num) {
   
     return num % 2 === 0 ? `${num} is Even` : `${num} is Odd`
     
}

console.log(checkEvenOdd(87));
console.log(checkEvenOdd(-5));
console.log(checkEvenOdd(-20));
console.log(checkEvenOdd(-2.5));
console.log(checkEvenOdd(2.0));
console.log(checkEvenOdd(24.6));
 

// solution-2

const check = function checkEvenOdd (num) {
     const remainder = num % 2
     if(remainder === 0){
         return `${num} is Even`
     } else {
         return `${num} is Odd`
     }
}

console.log(check(5));
console.log(check(10));
console.log(check(0));
console.log(check(-5));
console.log(check(-30));


//   5. Write a function that find smallest number among three numbers.


function findSmallestNumber (a, b, c) {
    if(typeof a === 'string' || typeof b !== 'number' || typeof c === 'string'){
         throw new Error('Please enter a number')
    }
    if(a === 0 || b === 0 || c === 0){
         throw new Error('Num should not be 0.')
    }
     if(a < b && a < c){
         return `${a} is smallest number`
     } 
     else if(b < a && b < c){
         return `${b} is smallest number`
     }
     else if(c < a && c < b){
         return `${c} is smallest number`
     }

     return `${a} is smallest number`
     
}

console.log(findSmallestNumber(87, 52, 81));
console.log(findSmallestNumber(7, 2, 8));
console.log(findSmallestNumber(-7, -2, -8));
console.log(findSmallestNumber(-7, -2, 8));
console.log(findSmallestNumber(-87, -8, 8));
console.log(findSmallestNumber(2, 2, 2));
console.log(findSmallestNumber(2, 2, 5));
console.log(findSmallestNumber(5, 1, 5));
console.log(findSmallestNumber(23.5, 9.0, 2.5));


// solution-2 

const find = function findSmallestNumber (a, b, c) {
    if(typeof a === 'string' || typeof b !== 'number' || typeof c === 'string'){
         throw new Error('Please enter a number')
    }
    if(a === 0 || b === 0 || c === 0){
         throw new Error('Num should not be 0.')
    }
     let smallestnum = a
     if(smallestnum > b){
         smallestnum = b 
     } 
     if(smallestnum > c){
         smallestnum = c
     }

     return `${smallestnum} is smallest number`
}

console.log(find(5, 8, 10));
console.log(find(1, 3, 3));
console.log(find(1.9, 3, 2.0));


// solution-3

const findNum = function (a, b, c) {
    if(typeof a === 'string' || typeof b !== 'number' || typeof c === 'string'){
         throw new Error('Please enter a number')
    }
    if(a === 0 || b === 0 || c === 0){
         throw new Error('Num should not be 0.')
    }
      let smallNum = a < b ? (a<c ? a:c) : (b<c ? b:c)
      return `${smallNum} is smallest number`
}

console.log(findNum(3, 2, 9));
console.log(findNum(3, -8, -6));


//  solution-4
// using Math.min

const findSmall = function (a, b, c) {
    if(typeof a === 'string' || typeof b !== 'number' || typeof c === 'string'){
         throw new Error('Please enter a number')
    }
    if(a === 0 || b === 0 || c === 0){
         throw new Error('Num should not be 0.')
    }
     return `${Math.min(a, b, c)} is small Num`
     
}

console.log(findSmall(8, 4, 9));
console.log(findSmall(-8, -99, -78));
console.log(findSmall(8, -3, 1));
console.log(findSmall(1, 1, 1));


// solution-5
// using Array.sort

const findSmallNum = function (a, b, c) {
    if(typeof a === 'string' || typeof b !== 'number' || typeof c === 'string'){
         throw new Error('Please enter a number')
    }
    if(a === 0 || b === 0 || c === 0){
         throw new Error('Num should not be 0.')
    }
     const array = [a, b, c]
     array.sort((a, b) => { return a - b})
     return `${array[0]} is small num`
}

console.log(findSmallNum(54, 87, 23));
console.log(findSmallNum(5, -8, -3));
// console.log(findSmallNum(5, 0, -4));



//   6. Write a function that returns the reverse of string.

// solution-1

function returnReverseString(value) {
    if(typeof value === 'number'){
         throw new Error('Please Enter a number.')
    }
      const string =  value.split('')
      const reverse = string.reverse()
      const join = reverse.join('')
      return `${value} converts to ${join}`
}

console.log( returnReverseString('Anjali'));
console.log( returnReverseString('12345'));
// console.log( returnReverseString(12345));


// solution-2

const returnString = function (value) {
    if(typeof value === 'number'){
         throw new Error('Please Enter a number.')
    }
    let result = ''
     for (let i = value.length - 1; i >= 0; i--) {
          result += value[i]
     }

     return `${value} converts in ${result}`
} 

console.log(returnString('Saroj'));
console.log(returnString('Sam'));
 
// solution-3

function returnstringusingMethods (value) {
    if(typeof value === 'number'){
         throw new Error('Please Enter a number.')
    }
    return `${value} converts in ${value.split('').reverse().join('')}` 
}

console.log(returnstringusingMethods('Hello World'));


// solution-4

function returnStringUsingRecursion (value) {
      if(value === ''){
          return ''
      }

      return returnStringUsingRecursion(value.slice(1)) + value[0]
}

console.log(returnStringUsingRecursion('Hello Friends'));


//   solution-5

function returnStringUsingForOfLoop (value) {
      let result = ''
      for(const key of value){
           result =  key + result 
      }
      return result
}

console.log(returnStringUsingForOfLoop('Hello'));

// solution-6


function returnStringUsingReduce (value) {
      return value.split('').reduce((reversed, char) => {return char + reversed })
}

console.log(returnStringUsingReduce('Hello Guys'));


//   7- Write a function that calculates factorial of a given number.


//  solution-1

