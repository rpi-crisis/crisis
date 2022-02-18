var nameFirst = null;
var firstName = "Jiawei";

firstName[0] = "H"; // cannot do

// outs the name
console.log(firstName);

// outs first letter in name
nameFirst = firstName[0]
console.log(nameFirst);

// last letter in name
var nameLast = null;
nameLast = firstName[firstName.length - 1];
console.log(nameLast);
