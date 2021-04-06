let value = 1;
for(var row = 1; row <= 5; row++){
//For each row starting at 1 until 5
    for(let col = 1; col<= 3; col++){
    //then for each column
        //console.log(value++);
        process.stdout.write('|' + '*' + '|')
        value++
    }
    console.log();
}