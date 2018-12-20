function Car(model, year, miles){
    this.model=model;
    this.year=year;
    this.miles=miles;
}

Car.prototype.toString=function(){
    return this.model+" has done "+this.miles+" miles.";
}

// Usage:

var civic = new Car("Honda civic", 2009, 20000);
var ford = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(ford.toString());