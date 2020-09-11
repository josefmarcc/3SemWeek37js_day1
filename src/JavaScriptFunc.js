function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2
}

var mul = function (n1, n2) {
    return n1 * n2
}

var divide = function (n1, n2) {
    return n1 / n2
}

var cb = function(n1,n2, callback){
    try{
    typeof n1 === "number"; //Will fail if n1 is undefined, or is not a number
    typeof n2 === "number"; //Will fail if n2 is undefined, or is not a number
    typeof callback === "function" //Will fail if callback is undefined or is not a function

    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } catch(err) {
        //DEN PRINTER OGSÅ UNDEFINED HVIS VI NÅR HER TIL 
        console.log("Åååh nej, der er gået noget galt med metodekaldet"); 
    }
};

// 3
console.log(add(1, 2))      // 3

console.log(add)            // Functionen bliver printet

console.log(add(1, 2, 3));  // 3  

console.log(add(1));        // Nan

console.log(cb(3, 3, add)); // 6 will not use add

console.log(cb(4, 3, sub)); // 7 will not use sub

console.log(cb(3, 3,add())); // Due to add() We are calling the function with parameter UNDEFINDED

console.log(cb(3, "hh", add));// 3 + hh = 3hh

console.log(cb(3,3,mul));

console.log(cb(3,3,divide));


