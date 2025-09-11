
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


//   7. Write a function that calculates factorial of a given number.


//  solution-1

function calculateFactorial (num) {
     if(num < 0){
           throw new Error('num should be positive.')
     }
      let result = 1
      for(let i = 1; i <= num; i++){
            result *= i
      }

      return result
}

console.log(calculateFactorial( 5));
console.log(calculateFactorial( 0));


// solution-2


function calculateFactorialUsingRecursion ( num) {
     if(num === 0 || num === 1){
           return 1
     }
     return num * calculateFactorialUsingRecursion(num - 1)
}

console.log(calculateFactorialUsingRecursion(5));



// solution-3 

function calculateFactorialUsingReduce (num) {
     if(num === 1 || num === 0){
           return 1
     }

     return [...Array(num).keys()].map((i) => i + 1).reduce((acc, val) => acc * val, 1)
}

console.log(calculateFactorialUsingRecursion(6));


// 8.  write a function that tells if provided year is leap year.


// solution-1

function isLeapYear (num) {
      return num % 4 === 0 ? `${num} is Leap Year` : `${num} is not Leap Year`
}

console.log(isLeapYear(2005));


// solution-2 

const leap = function (num) {
     const leap = num % 4
     if(leap === 0){
         return `${num} is Leap Year.` 
     } else {
         return `${num} is not Leap Year.` 
     }
}

console.log(leap(2009));
console.log(leap(2008));
console.log(leap(2024));


//  solution-3


//   9. Write a function that calculates and prints the sum of the digits of a number.


// solution-1

function calculateSum (num) {
     const string = num.toString()
     const split = string.split('')
     // console.log(split);
     let sumDigit = 0
     split.forEach((num) => {
          // console.log(parseInt(num));
         sumDigit = sumDigit + parseInt(num)
     })
     
     return sumDigit
     
}

console.log( calculateSum(14));
console.log( calculateSum(7843));


// solution-2

const sum = function (num) {
    let number = num 
    let sum = 0
    while(number > 0){
       let lastDigit = number % 10
       number = Math.floor(number/10)
       sum = sum + lastDigit
    }

    return sum

}

console.log(sum(57));
console.log(sum(37));
console.log(sum(375));


// solution-3

const calculateSum2 = (number) => {
     const Digits = number.toString().split('')
     const reduce = Digits.reduce((acc, digit) => {return acc + parseInt(digit)}, 0)
     return reduce
     
}

console.log(calculateSum2(57)); 
console.log(calculateSum2(57854)); 


//  10.  Write a function that genrates and prints a multiplication table for a given number up
          //   to specified range.

     
      //  solution-1
     
      
 function genrateTable (tableof, tabletill) {
     if(tableof <= 0 || tabletill <= 0){
          throw new Error('Please Enter a Positive number')
     }

      if(typeof tableof !== 'number' || typeof tabletill === 'string'){
                throw new Error('Please Enter a Number')
          }

       if(!Number.isInteger(tableof) || !Number.isInteger(tabletill)){
                throw new Error('Value should be Integer.')
          }   

       for(let i = 1; i <= tabletill; i++){
              console.log(`Table of ${tableof} and ${i} : ${i * tableof}`);
              
       }
       
 }     

genrateTable(5, 7)


//  solution-2


  const table = function (tableof, tabletill) {
        if(tableof <= 0 || tabletill <= 0){
          throw new Error('Please Enter a Positive number')
        }

        if(typeof tableof !== 'number' || typeof tabletill === 'string'){
                throw new Error('Please Enter a Number')
          }

          if(!Number.isInteger(tableof) || !Number.isInteger(tabletill)){
                throw new Error('Value should be Integer.')
          }

       for(let i = tableof; i <= tableof * tabletill; i = i + tableof){
              console.log(i);
              
       }
  }
 
  table(8, 5)


  // solution-3


  const tableFromArray = function (tableof, tabletill) {
            if(tableof <= 0 || tabletill <= 0){
          throw new Error('Please Enter a Positive number')
          }

           if(typeof tableof !== 'number' || typeof tabletill === 'string'){
                throw new Error('Please Enter a Number')
          }

          if(!Number.isInteger(tableof) || !Number.isInteger(tabletill)){
                throw new Error('Value should be Integer.')
          }

            Array.from({length:tabletill}, (_, i) => {
            console.log(`${tableof} * ${i + 1} = ${tableof * (i + 1)}`);
            
       }) 
       
  }

  tableFromArray(9, 5)


  // solution-4

  const tableUsingWhile = function (tableof, tabletill) {
          if(tableof <= 0 || tabletill <= 0){
          throw new Error('Please Enter a Positive number')
          }

           if(typeof tableof !== 'number' || typeof tabletill === 'string'){
                throw new Error('Please Enter a Number')
          }

          if(!Number.isInteger(tableof) || !Number.isInteger(tabletill)){
                throw new Error('Value should be Integer.')
          }

          let i = 1
          while(i <= tabletill){
            console.log(`${tableof} * ${i} = ${tableof * i}`)
            i = i + 1
       }
  }

  tableUsingWhile(12, 10)


  //   solution-5

  const tableUsingWhileDo = function (tableof, tabletill) {
          if(tableof <= 0 || tabletill <= 0){
          throw new Error('Please Enter a Positive number')
          }

           if(typeof tableof !== 'number' || typeof tabletill === 'string'){
                throw new Error('Please Enter a Number')
          }

          if(!Number.isInteger(tableof) || !Number.isInteger(tabletill)){
                throw new Error('Value should be Integer.')
          }

          let i = 1
         do {
              console.log(`${tableof} * ${i} = ${tableof * i}`)
               i++
          } while (i <= tabletill)
  }

   tableUsingWhileDo(13, 8)


   const tableUsingForEach = function (tableof, tabletill) {
          if(tableof <= 0 || tabletill <= 0){
          throw new Error('Please Enter a Positive number')
          }

           if(typeof tableof !== 'number' || typeof tabletill === 'string'){
                throw new Error('Please Enter a Number')
          }

          if(!Number.isInteger(tableof) || !Number.isInteger(tabletill)){
                throw new Error('Value should be Integer.')
          }

           const each = Array.from({length:tabletill}, (_, i) => i + 1 )
             each.forEach((i) => {
             console.log(`${tableof} * ${i} = ${tableof * i}`);
             
         })
            
   }

   tableUsingForEach(16, 8)


   // solution-6

   const tableUsingRecursion = function (tableof, tabletill, i = 1) {
       if(tableof <= 0 || tabletill <= 0){
          throw new Error('Please Enter a Positive number')
          }

          if(typeof tableof !== 'number' || typeof tabletill === 'string' ){
                throw new Error('Please Enter a Number')
          }

          if(!Number.isInteger(tableof) || !Number.isInteger(tabletill)){
                throw new Error('Value should be Integer.')
          }

          if(i > tabletill) return 
              console.log(`${tableof} * ${i} = ${tableof * i}`);
              tableUsingRecursion(tableof, tabletill, i+1)
         
   }

   tableUsingRecursion(19, 10)
//    tableUsingRecursion(19, 1.5)





//     11.  Write a function that prints and returns the maximum element in an array of numbers.


function printMaxElement (array) {
     // console.log(array);
     if(!array || array.length === 0 ){
           throw new Error('we need some numbers in the array')
     }

     if(Number.isNaN(array.length)){
         throw new Error('Please Enter a number Value.')
     }

     let biggestNumber = array[0] 
     for(let i = 1; i < array.length; i++){
         if(array[i] > biggestNumber){
               biggestNumber = array[i]  
           }
         }

         return `${biggestNumber} is biggest number.`
    
}

console.log( printMaxElement([8, 23, 45, 78, 95]));
// console.log( printMaxElement([]));
// console.log(printMaxElement(null));
console.log(printMaxElement([6, 4, 4, 15, 25, '35']));


//    solution-2

const printMax = function (array) {
      const max = Math.max(...array)
      return `${max} is the biggest number.`
      
} 

console.log(printMax([34, 87, 93, 25, 47]));

const max = function (array) {
     const max = Math.max(array)
     return max 
}

console.log(max(87, 45, 23, 91, 65));




