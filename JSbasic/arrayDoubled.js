num1 = [1, 2, 3, 5, 6, 7]
num2 = [2, 3, 4, 5, 6, 7]
num3 = []
total = 0

for (let i=0;i<=num1.length;i++){
    total = num1[i]**num2[i]
    num3.push(total)
}
console.log(num3[2])