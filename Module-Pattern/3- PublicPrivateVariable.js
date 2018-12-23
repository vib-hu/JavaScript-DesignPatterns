var namespace=(function(){
    var myPrivateVar,myPrivateMethod;

    myPrivateVar=0;

    myPrivateMethod=function(foo){
         console.log(foo);
    };

    return {
        myPublicVar:"foo",
        myPublicFunction:function(bar){
            myPrivateVar++;
            myPrivateMethod(bar);
        }
    };
})();

console.log(namespace.myPublicVar);
namespace.myPublicFunction("test");