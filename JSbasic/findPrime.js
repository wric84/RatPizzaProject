let start = 1;
let end = 100;

for(let currentNum = start; currentNum <= end; currentNum++){
    let isPrime = true;

    for (let divisor = 2; divisor < currentNum; divisor++){
        if (currentNum % divisor === 0){
            isPrime = false;
        }
    }
    if (isPrime){
        console.log(currentNum)
    }
}