//The Revealing Module pattern came about as Heilmann was 
//frustrated with the fact that he had to repeat the name 
//of the main object when we wanted to call one public method 
//from another or access public variables.  
//He also disliked the Module pattern’s requirement for having 
//to switch to object literal notation for the things he wished to make public.

var myRevealingModule=(function(){
    var privatevar="testPrivate";
    var publicVar="Hi There!";

    function privateFunction(){
        console.log("Name:"+privatevar);
    };

    function publicSetName(strName){
       privatevar=strName;
    };

    function publicGetName(){
        privateFunction();
    };

    // Reveal public pointers to
    // private functions and properties

    return{
        SetName:publicSetName,
        greeting:publicVar,
        getName:publicGetName
    };
})();

myRevealingModule.SetName('Vibhu');
myRevealingModule.getName();
console.log(myRevealingModule.greeting);