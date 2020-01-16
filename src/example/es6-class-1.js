// es5 构造函数
// function Point(x, y) {
//     this.x = x
//     this.y = y
// }
// Point.prototype.getPosition = function () {
//      return "[" + this.x + "," + this.y + "]"
// }
// var p1 = new Point(2, 3)
// console.log(p1)
// console.log(p1.getPosition())
// var p2 = new Point(4, 5)
// console.log(p2.getPosition())

class Point {
    constructor(x, y){
        this.x = x
        this.y = y
    }
    getPosition(){
        return `[${this.x}, ${this.y}]`
    }
}
const p1 = new Point(2,3)
console.log(p1)

console.log(p1.hasOwnProperty('x'))
console.log(p1.hasOwnProperty('getPosition'))
console.log(p1.__proto__.hasOwnProperty('getPosition'))

var info = {
    _age: 18,
    set age(newValue){
        if(newValue > 18){
            this._age = newValue
            console.log('start old')
        }else {
            console.log('young')
        }
    },
    get age(){
        console.log('set up')
        return this._age
    }
}
console.log(info.age)
info.age = 17
console.log(info.age)
info.age = 21
console.log(info.age)

class Info {
    constructor(age){
        this._age = age
    }
    set age(value){
        if(value>18){
            console.log('small')
            this._age = value
        }else {
            console.log('old')
            this._age = value
        }
    }
    get age(){
        return this._age
    }
}
const i1 = new Info(23)
console.log(i1.age)
i1.age = 17
console.log(i1.age)
i1.age = 21
console.log(i1.age)


// 函数两种定义方式
const func = function () {}
function func1(){}

// 类的两种定义方式
const c = class {}
class C1{}

//静态static  只用于类本身不可继承
class understandStatic{
    constructor(x, y){
        this.x = x
        this.y = y
    }
    getPosition(){
        return `[${this.x}, ${this.y}]`
    }
    static getClassName(){
        return understandStatic.name
    }
}
const under = new understandStatic(22,44)
console.log(under.getPosition())
console.log(understandStatic.getClassName())

understandStatic.z = 0  // 静态属性
class staticTest{
    _func(){} // 定义私有方法 仅供开发人员看 没什么实际意义
}



// 封装后外部不能访问_func2
const _func2 = () =>{}
class P{
    func1(){
        _func2.call(this)
    }
}
const p = new P()
// p._func2() // 报错

// // a.js
// const func3 = Symbol('func')
// export default class Point1 {
//     static [func3]{}
// }
//
// // b.js
// import Point1 from 'a.js'
// const point = new Point1
// console.log(point)

// new.target 返回new命令的构造函数
function point11(){
    console.log(new.target)
}

const pp = new point11()
console.log(pp) // 返回构造函数
const pp1 = point11()
console.log(pp1) // undefined

class Point4 {
    constructor(){
        console.log(new.target)
    }
}

const p5 = new Point4()
class Parent{
    constructor(){
        if(new.target === Parent){
            throw new Error("不能实例化！！！")
        }
    }
}
class Child extends Parent{
    constructor(){
        super()
    }
}

// const c = new Parent()
const cc = new Child()