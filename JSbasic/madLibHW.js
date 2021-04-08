let adjective = 'Damn';
let propernoun = 'Colton';
let verb = 'Ran';
let adjectiveTwo = ' ';

madLib = [
    'One___(' + adjective + ')day, ' +
    'Per Scholas student___(' + propernoun + ')' +
    '___(' + verb + ')because they were hungry'
];

let madLibScrub = [];

for (let i=0; i<madLib.length; i++){
    if (madLib[i].includes('_')){
            madLibScrub.push(madLib[i].replace(/_/gi,'')
            .replace(/\(/g,' ')
            .replace(/\)/g,' ')
            .toLowerCase());
        } else {
            console.log('Please try again')
    }    
}
//let madLibComplete = madLib.charAt(0) + madLibScrub.slice(1,-1)
console.log(madLibScrub)
