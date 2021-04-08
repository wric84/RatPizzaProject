let word = 'tacocat';
let wordLength = (word.length - 1)
let drow = '';

for (wordLength; wordLength>=0; wordLength--){
    drow += word.charAt(wordLength)
}
if (word == drow){
    console.log('\'' + word + '\' is a palindrome!')
}
else{
    console.log('that aint no palindrome')
}
console.log(drow)