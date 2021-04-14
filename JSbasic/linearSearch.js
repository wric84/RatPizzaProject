let array = [10, 547, -3, 26, 3, 9];
let data = 3;
let found = false;
let index = 0

function linearSearch(array, data){
    for (let i=0; i<=array.length;i++){
        if (array[i] == data){
            index = i;
            found=true;
            break;
        } 
    if (found == true){
        return data + 'is at ' + index+1;
    } 
    else {
        //return 'found data at element: ' + array[i]
        return 'Data not found';
        //console.log('data not found')
    } 
}}
