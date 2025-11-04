function sum (num) {
   let str = num.toString().split('');
   let red = str.reduce((acc, digit) => acc + parseInt(digit), 0);
   return red;
}

console.log(sum(76));
console.log(sum(5676));
console.log(sum(567654));

function table (tableof) {
   for(let i = 1; i <= 10; i++){
        console.log(tableof * i); 
   }
}

table(8);
