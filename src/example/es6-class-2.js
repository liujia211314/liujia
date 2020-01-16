function Food() {
    this.type = 'food'
}
Food.prototype.getType = function () {
    return this.type
}

function Vegetable(name) {
    this.name = name
}
Vegetable.prototype = new Food()
const tomato = new Vegetable()
console.log(tomato.getType())

class Parent {
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name
    }
    static getNames(){
        return this.name
    }
}

class Child extends Parent{
    constructor(name,age){
        super(name)
        this.age = age
    }
}
const c = new Child('liujia',33)
console.log(c)
console.log(c.getName())
console.log(c instanceof Parent)
console.log(c instanceof Child)
console.log(Child.getNames())
// 获取构造方法原型对象
console.log(Object.getPrototypeOf(Child) === Parent)

// super作为函数使用 子类继承父类  constructor中必须含有super()参数可以为空
// super作为对象
    //在普通方法中 指向 父类的原型对象
    //在静态方法中 指向 父类

class ParentSuper {
    constructor(){
        this.type = 'parent'
    }
    getName(){
        return this.type
    }
}
ParentSuper.getType = () =>{
    return 'isParent'
}
class ChildSup extends ParentSuper{
    constructor(){
        super()
        console.log(super.getName())
    }
    getParentName(){
        console.log(super.getName())
    }
    getParentType(){
        console.log(super.getType())
    }
    static getParentTypt1(){
        console.log(super.getType())
    }
}
const childSup = new ChildSup()
childSup.getParentName()
// c.getParentType() //error
ChildSup.getParentTypt1()
