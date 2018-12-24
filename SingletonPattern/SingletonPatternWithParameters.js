var singleton = (function () {
    function init(options) {

        options = options || {};

        this.name = "Singleton";
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }
    var instance;
    return {
        getInstance: function (options) {
            if (!instance) {
                instance = new init(options);
            }
            return instance;
        }
    }
})();

var instance = singleton.getInstance({ pointX: 10, pointY: 20 });

console.log(instance.name);
console.log(instance.pointX);
console.log(instance.pointY);
