function sum (num) {
   let str = num.toString().split('');
   let red = str.reduce((acc, digit) => acc + parseInt(digit), 0);
   return red;
}

console.log(sum(76));
console.log(sum(5676));
console.log(sum(567654));

function table (tableof, tabletill) {
   for(let i = 1; i <= tabletill; i++){
          console.log(tableof * i)
   }
}

table(7, 8)

function isPalindrome(str){
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
         if(str[i] !== str[str.length - 1 - i]){
              return `${str} is not palindrome.`
         }
    }

    return `${str} is palindrome.`
}

console.log(isPalindrome('Anjali'));
console.log(isPalindrome('software'));
console.log(isPalindrome('Level'));
console.log(isPalindrome('Madam'));


function pow (base, exponent) {
   let result  = 1
    for(let i = 1; i <= exponent; i++){
           result = result * base;
    }

    return result;
}

console.log(pow(2,6));

function power (base, exponent) {
    let po = Math.pow(base , exponent)
    return po;
} 

console.log(power(7, 3));
