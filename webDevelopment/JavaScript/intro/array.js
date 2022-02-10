var ourArray = ["Jiawei", 19];
var ourArray1 = ["Jiawei", 19];

var pop = ourArray.pop();
var shift = ourArray1.shift();

console.log(shift); // takes the first index and equals it to the variable declared
console.log(ourArray1); // the first index in the array has been removed
console.log();
console.log(pop); // takes the last index and equals it to the variable declared
console.log(ourArray); // the last index in the array has been removed

// unshift

var ourArray3 = ["Jiawei", 19];
ourArray3.unshift("Cute and Friendly!"); // adds the string the the beginning of the array
console.log(ourArray3); 

