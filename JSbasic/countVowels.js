let sentence = "Yo ho ho and a bottle of rum"
let modifySentence = sentence.toLowerCase()
let vowels = 0
for (let i=0; i<modifySentence.length; i++){
    if (modifySentence[i]==="a" || modifySentence[i]==="e" || modifySentence[i]==="i" || modifySentence[i]==="o" || modifySentence[i]==="u"){
    vowels++
    //console.log(modifySentence[i])
    }
}
console.log('Total number of vowels is: ')
console.log('Drum Roll Please')
console.log('*drrrrrrrrrrrrrrrrrrrrrrr*')
console.log('*drrrrrrrrrrrrr.....*')
console.log('*drrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr.....*')
console.log(vowels + '!')
