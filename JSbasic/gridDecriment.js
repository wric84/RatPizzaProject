let value = 1;
let amountRow=5;
let amountCol=5;
for(let row = 5; row >= 1; row--){
//For each row starting at 1 until 5
    for(let col = 1; col<= row; col++){
    //then for each column
        process.stdout.write(`${col}`);
    } 
    console.log();
}