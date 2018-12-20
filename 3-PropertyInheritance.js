
var defineProp = function ( obj, key, value ){
    var config = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty( obj, key, config );
  };

// To use, we then create a new empty "person" object
var person= Object.create(Object.prototype);
defineProp( person, "dateOfBirth", "1981" );

var driver= Object.create(person);
defineProp(driver,"topSpeed","100mph");

// Get an inherited property (1981)
console.log(driver.dateOfBirth );

// Get the property we set (100mph)
console.log( driver.topSpeed );