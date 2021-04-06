

let money = 10
let price = 4
let remainder = money - price
let count = 0

function vending(remainder){
    while (remainder<money){
        if (remainder>0){
            console.log(remainder*.25)
            money--
            remainder++
            break
        }
        else{
            console.log('not enough money inserted')
        }
    }
}
