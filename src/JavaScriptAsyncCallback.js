var msgPrinter = function(msg, delay){
    setTimeout(function(){
        console.log(msg);
    }, delay);
};

console.log("aaaa");          // 1.
msgPrinter("bbbb", 2000);     // 5.
console.log("dddddd");        // 2.
msgPrinter("eeeeeeee", 1000); // 4.
console.log("ffffffff");      // 3.