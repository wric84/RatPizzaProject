let todayDate = new Date();
let hours = todayDate.getHours();
let minutes = todayDate.getMinutes();
let seconds = todayDate.getSeconds();

if (hours < 12){
    console.log('Good morning!');
}
else if (hours > 12 && hours <= 16){
    console.log('Good Afternoon!');
}
else{
    console.log('Salutations Neighbor')
}
console.log(hours + ':' + minutes + ':' + seconds);
console.log(Date())