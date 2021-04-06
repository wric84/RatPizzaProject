// the way below returns numeric month/day

/*let month = 12
let day = 7
if (month >= 1 && month <= 12){
    if (day >=1 && day <= 7){
        console.log('Today\'s date is: ' + month + '/' + day + '.');
    }
    else{
        console.log('Day is invalid in the ' + month + ' month.')
    }
} 
else{
    console.log('Month format is incorrect.')
}
*/

//The way below subs the numeric values for their respected months/days
var month = 13
var day = 13
if (month >=1 && month <=12){
    if (month == 1) {
        month = 'January'
    }
    else if (month == 2){
        month = 'February'
    }
    else if (month == 3){
        month = 'March'
    }
    else if (month == 4){
        month = 'April'
    }
    else if (month == 5){
        month = 'May'
    }
    else if (month == 6){
        month = 'June'
    }
    else if (month == 7){
        month = 'July'
    }
    else if (month == 8){
        month = 'August'
    }
    else if (month == 9){
        month = 'September'
    }
    else if (month == 10){
        month = 'October'
    }
    else if (month == 11){
        month = 'November'
    }
    else if (month == 12){
        month = 'December'
    }
console.log('The month is ' + month + '.') 
}
else{
    console.log('invalid month')
}
if (day >=1 && day <= 7){    
    if (day == 1){
        day = 'Monday'
    }
    else if (day == 2){
        day = 'Tuesday'
    }
    else if (day == 3){
        day = 'Wednesday'
    }
    else if (day == 4){
        day = 'Thursday'
    }
    else if (day == 5){
        day = 'Friday'
    }
    else if (day == 6){
        day = 'Saturday'
    }
    else if (day == 7){
        day = 'Sunday'
    }
console.log('And the day is ' + day + '.')
}
else{
    console.log('invalid day')
}    
