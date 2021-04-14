let howManyChickens = [3, -4, 5.2, 27, 16];
//console.log(howManyChickens)
let len = howManyChickens.length;
for (let i = 0; i<len; i++){
    //console.log(howManyChickens)
    for (let j=0; j<len; j++){
        //console.log(howManyChickens)
        if (howManyChickens[j] > howManyChickens[j+1]){
            temp = howManyChickens[j]
            howManyChickens[j] = howManyChickens[j+1]
            howManyChickens[j+1] = temp
        }
        //console.log(howManyChickens)
    }
    //console.log(howManyChickens)
}
console.log(howManyChickens)