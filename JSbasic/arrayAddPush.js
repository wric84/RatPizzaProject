let num= [1, 42, -3, 42, 42];
let total = 0;

for (let i=0; i<num.length;i++){
    total+=num[i];
}
num.push(42);
total += num[num.length -1]
console.log(total);
