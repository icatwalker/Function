/**
 * Created by Administrator on 2017/6/15.
 */
//14:04测试
//创建和调用都可以链式操作
Function.prototype.addself=function(name,fn){//prototype指向 实例出来的对象
    this[name]=fn;                           //可以实现为 实例化的对象添加方法。
    return this;//返回Function.prototype 可以链式创建函数
};
var methods=new Function();
methods
    .addself("checkName",function(){
    console.log("checkName");
    return this;//返回methods 可以链式 调用函数
})
    .addself("checkEmail",function(){
    console.log("checkEmail");
    return this;
});

console.log(typeof(methods));
methods.checkName().checkEmail();
//分割-----------------------------
//没弄明白啊
Function.prototype.addMethod=function(name,fn){//为每个函数 的prototype添加方法
    this.prototype[name]=fn;                    //创建出来的函数都有该方法。
    return this;
};

var Methods=function(){};

Methods.checkName4=function(){
    console.log("私有方法");
};

Methods//该类 创建的方法 都写在原型上了。
    .addMethod("checkName1",function(){
    console.log("111");
})
    .addMethod("checkName2",function(){
        console.log("222");
    });

var m=new Methods();//实例化的m可以继承 Methods prototype的方法。
m.checkName1();
console.log(m.prototype);//undefined,实例化出的对象 没有prototype.

m.checkName3=function(){
    console.log(333);
};
Methods.prototype.checkName1();

console.log(Object.prototype);
//是一个Object 对象的实例（空对象）；
//Object 和 构造函数都是对象

var o =new Object();//实例化一个新的空对象。
console.log(o.prototype);// 实例出来的对象没有prototype ，因此不能再实例
console.log(o.__proto__); //Object;

//F 实力出的对象。
function F(){}
var i=new F();
console.log(i.prototype);//undefined
console.log(i.__proto__);//Function
console.log(Function.prototype);// 实际应该是Object  即对象是 Function 实例出来的么
console.log(Function.__proto__);//



function F() {};
F.prototype.a = function() {};
var c = new F();
// undefined              F {a: function}
console.log(i.prototype, c.__proto__);


//上述方法 有细微差别。将prototype 对象覆盖 会丢失constrctor
function M() {}
M.prototype = {
    a: function() {}
};
var d = new M();
// undefined             Object {a: function}
console.log(i.prototype, d.__proto__);



// 重新指定正确的构造函数
F.prototype.constructor = F;
//普通对象


// 这是一个函数, 函数是 Function (构造函数)的实例对象, 那么就是由 Function 构造出来的
Object.__proto__ == Function.prototype // 那么Object的原型, true


// 这个是一个普通对象了, 因此属于 Object 的实例
Function.prototype.__proto__ == Object.prototype // true

function Student(name,age){
    this.name=name;
    this.age=age;
    var no=12234;
}
Student.prototype.intr=function(){
    console.log("我的名字是"+this.name);
};
Student.prototype.grade=6;
var  lilei=new Student("lilei",16);
console.log(lilei);
console.log(lilei.grade);
//console.log(lilei.intr());
lilei.intr();
console.log();
console.log(lilei.__proto__);

var han=new Student("han",15);
console.log(han.grade);
console.log(Student.no);

console.log(Student.__proto__==Function.prototype);
console.log(Function.prototype.__proto__==Object.prototype);
console.log(Object.prototype.__proto__==null);