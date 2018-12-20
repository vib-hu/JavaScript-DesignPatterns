var newObject={};
var newObject=Object.create(Object.prototype);
var newObject=new Object();

// Creating object with key value pair.
// ECMAScript 3 compatible approaches
 
/// 1. Dot syntax 
// Set properties
newObject.someKey = "Hello World";

// Get properties
var value = newObject.someKey;
console.log(value);

/// 2. Square bracket syntax
// Set properties
newObject["someKey"] = "Hello World";
 
// Get properties
var value = newObject["someKey"];
console.log(value);
