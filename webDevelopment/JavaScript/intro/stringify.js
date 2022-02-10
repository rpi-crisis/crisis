function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

var a = typeof JSON.stringify(testArr); // stringify converts it to a string
console.log(a);

console.log("Printing out Array: ", testArr)
console.log("Printing out String: ", JSON.stringify(testArr)); // printing out the array instead of making it a string
