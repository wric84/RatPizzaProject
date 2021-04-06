function randomInt(start, end) {
    var range = (end - start) + 1;
    return Math.floor(Math.random() * range) + start;
  }
  
  println(randomInt(1, 3));
  println(randomInt(1, 10));  
  println(randomInt(50, 60));  