num1 = 7
num2 = 3
num3 = 5

/*if(num1 > num2 && num3)
{
    console.log(num1 + ' is the largest')
}
else if(num2 > num1 && num3)
{
    console.log(num2 + ' is the largest')
}
else{
    console.log(num3 + 'is the largest')
}*/

let largest = ' is the largest';
switch(largest){
    case num1 > num2 && num1 > num3:
        console.log(num1 + ' is the largest');
        break;
    case num2 > num1 && num2 > num3:
        console.log(num2 + ' is the largest');
        break;
    default:
        console.log(num3 + ' is the largest');
        break;
}