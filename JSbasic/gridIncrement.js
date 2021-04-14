let value = 1;
let amountRow = 5;
let amountCol = 5;
for (let row = 1; row <= amountRow; row++){
    for(let col = 1; col<= amountCol; col++){
        if (col <= row){
            process.stdout.write('#');
        }
        
    }
    console.log(row)
    console.log();
}
