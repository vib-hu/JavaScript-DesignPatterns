//The Module pattern is based in part on object literals 
//and so it makes sense to refresh our knowledge of them first.

//In object literal notation, an object is described as a
//set of comma-separated name/value pairs enclosed in curly braces ({}).

// var myObjectLiteral = {
//     variableKey: variableValue,
//     functionKey: function () {
//     }
// }

//Object literals don't require instantiation using the new operator
// but shouldn't be used at the start of a statement as the opening 
//{ may be interpreted as the beginning of a block. 
//Outside of an object, new members may be added 
//to it using assignment as follows myModule.property = "someValue";

var myModule = {
    myProperty: "SomeValue",
    myConfig: {
        useCaching: true,
        language: "en"
    },
    saySomething: function () {
        console.log("Test say something");
    },
    // output a value based on the current configuration
    reportMyConfig: function () {
        console.log("caching is:" + (this.myConfig.useCaching ? "enabled" : "disabled"));
    },

    // override the current configuration
    updateMyConfig: function (newConfig) {
        if (typeof newConfig === "object") {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};

myModule.saySomething();
myModule.reportMyConfig();

myModule.updateMyConfig({
    language:"fr",
    useCaching:"false"
});

myModule.reportMyConfig();