var basketModule = (function () {
    //private
    var basket = [];
    function doSomethingPrivate() {

    }

    function doSomeThingElsePrivate() {

    }

    return {
        addItem: function (values) {
            basket.push(values);
        },
        getItemCount: function () {
            return basket.length;
        },
        doSomething: doSomethingPrivate,
        getTotal: function () {
            var q = this.getItemCount();
            var p = 0;

            while (q--) {
                p += basket[q].price;
            }
            return p;
        }
    };
})();

basketModule.addItem({item:"Bread",price:1.5});
basketModule.addItem({item:"Butter",price:2});
basketModule.addItem({item:"Water",price:1});

console.log(basketModule.getTotal());