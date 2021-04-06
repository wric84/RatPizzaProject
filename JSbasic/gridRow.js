//let value = 2;
let amountRow=5;
let amountCol=3;
for(let row = 1; row <= amountRow; row++){
//For each row starting at 1 until 5
    for(let col = 1; col<= amountCol; col++){
    //then for each column
        //console.log(value++);
        let temp = row + "," + col;
        process.stdout.write(temp.toString() + '|' );
    }
    console.log();
}