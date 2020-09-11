let list = ["lars", "Jan", "Peter", "Bo", "Frederik"];

let filterdList = list.filter(x => x.length <= 3)

console.log(filterdList)

filterdList.forEach(console.log);
list.forEach(console.log);


let UpperList = list.map(x => x.toUpperCase())

console.log(UpperList)

function htmlNames(){
    return list.map(n => n ), "<ul><li>" +list.join("</li><li>") + "</li></ul>"; 
    } 
console.log("Supposed to look like HTML"); 
console.log(htmlNames());