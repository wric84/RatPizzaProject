let value = 1;
let amountRow = 5;
let amountCol = 5;

for (let row = 5; row >= 1; row--){
    for( let col = 1; col <= row; col++){
        process.stdout.write('#')
    }
    console.log(row)
    console.log()
}