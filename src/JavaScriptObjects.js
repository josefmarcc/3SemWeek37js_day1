let person = {name:"John", age:24, hobby:"football", email:"johndoe@gmail.com"};

for(prop in person){
  console.log(prop,person[prop]);
}

delete person.age

for(prop in person){
  console.log(prop,person[prop]);
}


person.newAge = 25;

for(prop in person){
  console.log(prop,person[prop]);
}

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.details = function() {return this.firstName + " " + this.lastName + " " + this.age;};
}

let newPerson = new Person("John", "Doe", 50);

console.log(newPerson.details())
