/*for(counter= 2; counter <=10; counter*=2){
    console.log(counter + "....");
}
console.log("Who do we appreciate?")
console.log("Julian")
*/
let counter = 2;
while(counter <=10){
    console.log(counter + '....');
}
console.log("Who do we appreciate?")
console.log("Julian")

let sumIndex = 0;
start=-5
end=14
/*for (counter=start; counter <=end; counter++){
    if (counter%2 == 0){
        console.log('2' + ' x ' + (counter) + ' = ' +(2*counter))
    }

    sumIndex += counter
}
console.log(sumIndex)
*/

while(counter<=end){
    if (counter%2 == 0){
        console.log('2' + 'x' + (counter) + '=' +(2*counter))
    }
    sumIndex+= counter
}
console.log(sumIndex)