let arr = [-3, 0, 22, 47, 528, 1093]
let arr2 = [0, -3, 47, 1093, 528]
let value = 528
let sorted = arr2.sort(function(a,b) {return a-b});

function binarySearch(arr, value){
    let high = arr.length-1;
    let low = 0;
    let mid = 0;

    while (low <= high){
        console.log('try')
        mid = Math.floor((high+low)/2)
        if(arr[mid] == value){
            return arr[mid];
        }else if(value > arr[mid]){
            low =mid+1;
        }else{
            high=mid-1;
        }
    }
    return "Value not in array"
}
//console.log(binarySearch(sorted, value))