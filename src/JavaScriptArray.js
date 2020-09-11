/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

// use concat to make a new array with all
var all = boys.concat(girls);

// Use join to return an array seperated 
console.log(all.join(","))
console.log(all.join("-"));

// Use push to add to the end of the array. unshift to add in front
all.push("Lone", "Gitte");
all.unshift("Hans", "Kurt");

console.log(all)

// Use shit to remove the first element of the array. Pop to remove the last element
all.shift(0)
all.pop(all.length - 1)

console.log(all)

// Use splice to remove 2 elements in the middle of the array.
all.splice((all.length / 2) - 1, 2);

console.log(all)

// Use reverse to reverse the array
all.reverse();

console.log(all)

// Use sort to sort the array in alphabetic order. Notice it doesn't sort the array properly as some elements are not in capitalized letters.
all.sort()

console.log(all);

// Use arrow function to uppercase all the elements
var allUpper = all.map(x => x.toUpperCase());

console.log(allUpper);

let allWithlorL = all.filter(all => all.includes("L")|| all.includes("l"));
console.log(allWithlorL);


