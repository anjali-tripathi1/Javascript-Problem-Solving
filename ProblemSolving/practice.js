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

function bigNum (array) {
     let biggest = array[0];
     for(let i = 1; i < array.length; i++){
        
   
     }
}