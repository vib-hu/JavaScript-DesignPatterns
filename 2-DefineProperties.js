/// ECMAScript 5 only compatible approaches

// 3. Object.defineProperty
// Set properties
var newObject= Object.create(Object.prototype);

Object.defineProperty(newObject, "somekey", {
    value: "somevalue",
    writable: true,
    configurable: true,
    enumerable: true
});

// If the above feels a little difficult to read, a short-hand could
// be written as follows:

var defineProp = function (obj, key, value) {
    var config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    };
    Object.defineProperty(obj,key,config);
};

var person = Object.create(Object.prototype);
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", "false");

console.log(person);

// 4. Object.defineProperties
 
// Set properties
Object.defineProperties(newObject, {
    "someKey": {
        value: "Hello World",
        writable: true
    },
    "anotherKey": {
        value: "Foo bar",
        writable: false
    }
});
   