let num = 0
let num1 = 1

for (let i = 0; i < 10; i++){
    newNum = num + num1
    num = num1
    num1 = newNum

    console.log(newNum)
}
