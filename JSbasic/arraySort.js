favoriteNumbers = [3, -3, 84, 42]
console.log(favoriteNumbers)

for (let i = 0; i<=favoriteNumbers.length-2; i++){
    for (let j = i+1; j<favoriteNumbers.length; j++) {
        if (favoriteNumbers[i] > favoriteNumbers[j]){
            newFavoriteNumber = favoriteNumbers[i];
            favoriteNumbers[i] = favoriteNumbers[j];
            favoriteNumbers[j] = newFavoriteNumber;
        }
    }
}
console.log(favoriteNumbers)