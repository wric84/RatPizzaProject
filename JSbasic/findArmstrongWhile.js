
let sum = 0;
let userInput = 371;
let counter = 1;

let currentNum=userInput;
let quotient = 1

while (quotient != 0){

    let remainder = currentNum %10;
    let quotient = Math.floor(currentNum/10);

    if (remainder !==0){
        sum += remainder*remainder*remainder;
        currentNum = quotient
    }
    if (sum===userInput){
        console.log(userInput + ' is an Armstrong number')
        break
    }
    counter++
}
