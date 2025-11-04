function checkEvenOdd (num) {
    const rem = num % 2;
    if(rem === 0){
        return `${num} is Even.`
    } 

    return `${num} is Odd.`
}

console.log(checkEvenOdd('128'));
