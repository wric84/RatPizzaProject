let cupsOfSugarNeeded = 6
let cupsAdded = 0

do { //Will always display at least once, even if false
  cupsAdded = cupsAdded + cupsOfSugarNeeded; cupsAdded++
console.log(cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded);