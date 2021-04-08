let howManyChickens = [3, -4, 5.2, 27, 16];
let len = howManyChickens.length;
for (let i = 0; i<len; i++){
    for (let j=0; j<len; j++){
        if (howManyChickens[j] > howManyChickens[j+1]){
            temp = howManyChickens[i]
            howManyChickens[i] = howManyChickens[j]
            howManyChickens[j] = temp
        }
    }
}
console.log(howManyChickens)