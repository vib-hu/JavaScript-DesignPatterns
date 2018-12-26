// our Subject, Observer and Observer list classes

// ObserverList
function ObserverList() {
    this.list = [];
};

ObserverList.prototype.add = function (obj) {
    this.list.push(obj);
};

ObserverList.prototype.count= function(){
   return this.list.length;
};

ObserverList.prototype.getByIndex = function (index) {
    if (index > -1 && index < this.list.length)
        return this.list[index];
};

// Subject

function Subject() {
    this.observerList = new ObserverList();
};

Subject.prototype.addObserver = function (obj) {
    this.observerList.add(obj);
};

Subject.prototype.notify=function(context){
    var observerCount=this.observerList.count();
    for(var i=0;i<observerCount;i++){
       this.observerList.getByIndex(i).update(context);
    }
};

// Observer
function Observer(){
};

Observer.prototype.update=function(){
};

/////////////////////////////////////////////

function extend(obj,extention){
  for(var key in extention){
      obj[key]=extention[key];
  }
};

var mainCheckBox= document.getElementById("mainCheckBox");
var addBtn= document.getElementById("addNewObserver");
var container= document.getElementById("container");

//Concrete Subject
extend(mainCheckBox,new Subject());

mainCheckBox.onclick=function(){
    mainCheckBox.notify(mainCheckBox.checked);
};

addBtn.onclick=function(){
    var check = document. qcreateElement("Input");
    check.type="checkbox";
    extend(check,new Observer());
    check.update= function(value){
         check.checked=value;
    };
   mainCheckBox.addObserver(check);
   container.appendChild(check);
};