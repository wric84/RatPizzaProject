/*const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i=0; i<synonyms.length;i++){
  greetings.push("Have a " + synonyms[i] + " day!");
};
// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for (let i=0; i<greetings.length; i++){
  console.log(greetings[i])
}
*/
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for (let i=0; i<=firstNames.length-1; i++){
    bios.push("My name is " + firstNames[i] + " " + lastNames[i] + " and I am from " + places[i]);
    
  }
  /*console.log(bios)
  for (let i=0; i<lastNames.length; i++){
    bios.push(lastNames + " and I am from ");
    
  }
  for (let i=0; i<places.length; i++){
    bios.push(places)
  }  */
console.log(bios)
