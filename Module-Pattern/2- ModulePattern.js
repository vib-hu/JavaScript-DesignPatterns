var testModule = (function () {
    var counter = 0;
    return {
        incrementCounter: function () {
            return counter++;
        },

        resetCounter: function () {
            console.log("Counter value prior to reset" + counter);
            counter = 0;
        }
    };
})();

// undefined
console.log(testModule.counter);

//0
console.log(testModule.incrementCounter());

testModule.resetCounter();
