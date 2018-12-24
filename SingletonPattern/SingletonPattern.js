var singleton = (function () {

    var instance;

    function init() {
        function privateMethod() {
            console.log("I am pivate method");
        }
        var privatevariable = "I am private variable";
        var privateRandomNumber = Math.random();
        return {
            publicMethod: function () {
                console.log("Inside public method");
            },
            publicProperty: "I am also public",
            getRandomNumber: function () {
                return privateRandomNumber;
            }
        };
    };
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();


var singletonInstance=singleton.getInstance();
singletonInstance.getRandomNumber();
singletonInstance.publicMethod();