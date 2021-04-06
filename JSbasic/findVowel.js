let character = 3
//let lower = character.toLowerCase()
if(character != isNaN()){
    console.log("That\'s not a letter fool");
} 
else if (character == 'a' ||character == 'e' ||character == 'i' ||character == 'o' ||character == 'u'){
    console.log(character + ' is a vowel');
} 
else {
    console.log("'" + character + "'" + ' is a consonant');
}