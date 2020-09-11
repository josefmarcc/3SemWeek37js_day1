var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

let newerCars = cars.filter(x => x.year > 1999);

let volvoCars = cars.filter(x => x.make === "Volvo");

let under5000Cars = cars.filter(x => x.price < 5000);



console.log(newerCars);

console.log(volvoCars);

console.log(under5000Cars);


let sql = function(){
    return cars.map(c => "INSERT INTO cars (id,year,make,model,price) VALUES (" + [c.id, c.year, c.make, c.model,c.price] + ")", cars.join(",")); 
};
console.log(sql());

