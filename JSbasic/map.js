let myStudents = new Map();

myStudents.set('bob', 23);
myStudents.set('billy-bob', 2);
myStudents.set('Jezzabel', 31);
myStudents.set('bob 2', 14);
myStudents.set('Annabell', 24);
myStudents.set('Anniebell', 34);
myStudents.set('spud', 13);
myStudents.set('potato', 3);
myStudents.set('bob 3', 27);
myStudents.set('boozer', 23);

console.log(myStudents.size);
console.log(myStudents.values());
console.log(myStudents.keys());
console.log(myStudents.has('Jezzabel'));
console.log(myStudents.delete('Jezzabel'));
console.log(myStudents.has('Jezabell'))
console.log(myStudents.size)
