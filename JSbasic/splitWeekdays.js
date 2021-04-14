let days = "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday";

let daysArray = days.split(",");
let daysArray2 = days
//let daysArray = days.split(""); = Each element in var
//let daysArray = days.split(","); = var will be one element
let joinDays = daysArray.splice(7, 0, "Repeat");
let daysTrimmed = days.trim();
let daysJoined = joinDays + daysArray;
let daysSplit = days.replace(",", " - ");
let daysSort = daysArray.sort();

document.getElementById("para1").innerHTML = daysArray[0];
document.getElementById("para2").innerHTML = joinDays;
document.getElementById("para3").innerHTML = daysTrimmed;
document.getElementById("para4").innerHTML = daysJoined;
document.getElementById("para5").innerHTML = daysSort;