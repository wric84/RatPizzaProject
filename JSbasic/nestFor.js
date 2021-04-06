let value = 1;
for(var row = 1; row <= 4; row++){
    for(let col = 1; col<= 4; col++){
        //console.log(value++);
        process.stdout.write(value.toString() + '|' )
        value++
    }
    console.log();
}