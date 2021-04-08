let firstName = 'Todd'
let lastName = 'Fuddrucker'
let userName = ' ToddF'
let innapropriate = 'shit'

/*for (let i=0; i<userName.length; i++){
    if(userName[i] == '$'){
        console.log(userName + ': is not allowed')
    }
    else if (6 < userName.length){
        console.log(userName.trim().toLowerCase())
    }
    else{
        console.log(userName.trim().toLowerCase())
    }
}*/

/*if (userName > 6){
    if (userName.charAt(0) == '$' || userName.charAt(0) == '!' || userName.charAt(0) == '#'){
        console.log(userName + ': is not allowed')
    }
    else if(userName == innapropriate){
        console.log(userName.trim().toLowerCase().replace(innapropriate, 'poo'))
    }
}
else{
    console.log(userName.padStart(6, '!'))
*/

let secretCode = 'One upon a time there was a top secret message'
let secretCodeUpgrade = paragraph.toLocaleLowerCase().trim()

while (secretCodeUpgrade.length > 10){
    if (secretCodeUpgrade.charAt(0) == '$' || secretCodeUpgrade.charAt(0) == '!' || secretCodeUpgrade.charAt(0) == '#'){
        console.log(secretCodeUpgrade + ': is not allowed')
    }
    else{console.log(secretCodeUpgrade.replace(/top Secret/gi, 'Fluffy bunnies'))
    break
    }
}
let dumbParagraph = 'That\'s not super secret enough Secret Squirrel.'

