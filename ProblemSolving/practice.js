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
   return base**exponent;
}

console.log(pow(5, 6));

function vowelAndConsonent (string) {
     string = string.toLowerCase();
     string = string.replace(/ /g, '')
     console.log('After cleanup is', string);
     let vowel = 'aeiou';
     let consonent = 'bcdfghjklmnpqrstvwxyz';
     let vowelCount = 0;
     let consonentCount = 0;
     for(let i = 0; i < string.length; i++){
           if(vowel.includes(string[i])){
               vowelCount++;
           }

           else if(/^[a-z]$/.test(string[i])){
               consonentCount++;
           }

           else {
               console.log(string), 'Negither vowel nor consonent.'
           }
     }

     return {vowelCount, consonentCount}
}

console.log(vowelAndConsonent('Anjali Tripathi 123'));

function calculateFactors (num) {
     const array = [];
     for(let i = 0; i <= num; i++){
         if(num % i === 0){
             array.push(i)
         }
     } 

     return array;
}

console.log(calculateFactors(6));

function calAvg () {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
         sum += arguments[i];
    }

    let result = sum / arguments.length;
    return result;
}

console.log(calAvg(3, 2, 5, 7, 8, 3, 2));

