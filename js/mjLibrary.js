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

