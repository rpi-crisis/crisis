var myGlobal = 10;

function fun1(){
    oopsGlobal = 5; 
    // if var not placed, it becomes global despite being inside of a function
}

function fun2(){
    var output = '';
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    output += '\n';
    if (typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1(); // makes a variable oopsGlobal
fun2(); // makes that variable exist in this function as well
