
let sum = 0; //number to compare the userInput to
let userInput = 371;

let currentNum=userInput; //a number that reflexs the userInput that can be manipulated

for (i=0; i<currentNum; i++){ //starting at 0, working up to the userInput and incrementing by 1
    let remainder = currentNum %10; //defining remainder
    let quotient = Math.floor(currentNum/10); //defining quotient and keeping the number whole

    if (remainder !==0){ //first we want to check what to do with our remainders
        sum += remainder*remainder*remainder; //armstrong numbers are cubed and we add it to our sum
        currentNum = quotient //we only want to look at what is left after dividing by 10 (the quotient)
    }
    if (sum===userInput){ //if the two numbers are the same
        console.log(userInput + ' is an Armstrong number')// result
    }
}
