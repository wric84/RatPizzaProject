function randomInt(start, end) {
    var range = (end - start) + 1;
    return Math.floor(Math.random() * range) + start;
}

var val = randomInt(1, 7);
if (val === 1 ) {
    println("Signs point to yes.");
} else if (val === 2 ) {
    println("Outlook good.");
} else if (val === 3 ) {
    println("It is decidely so.");
} else if (val === 4 ) {
    println("Reply hazy, ask again.");
} else if (val === 5 ) {
    println("Concentrate and ask again.");
} else if (val === 6 ) {
    println("My sources say no.");
} else {
    println("Don't count on it.");
}