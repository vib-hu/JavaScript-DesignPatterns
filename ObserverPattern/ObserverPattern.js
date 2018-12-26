// Defining observer list and its methods
function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
    this.observerList.push(obj);
};

ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

ObserverList.prototype.count = function () {
    return observerList.length;
};

ObserverList.prototype.indexOf = function (obj) {
    var i = 0;
    while (i < this.observerList.length) {
        if (this.observerList[i] === obj)
            return i;
        i++;
    }
    return -1;
};

ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
};

//Defining subject and its methods
function Subject() {
    var observers = new ObserverList();
};

Subject.prototype.addObserver = function (obj) {
    this.observers.add(obj);
};

Subject.prototype.removeObserver = function (obj) {
    var index = this.observers.indexOf(obj);
    if (index != -1)
        this.observers.removeAt(index);
};

Subject.prototype.notify=function(context){
    var observerCount=this.observers.count();
    for(var i=0;i<this.observerCount;i++){
        this.observers.get(i).update(context);
    }
};

//Define sample observer
function Observer(){

};

Observer.prototype.update=function(){

};