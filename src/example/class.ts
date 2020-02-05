class Point {
    public x: number
    public y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    public getPoint() {
        return `{${this.x}, ${this.y}}`
    }
}

const p = new Point(1, 2)
console.log(p)
// public
// private
class Parent {
    public name: string
    constructor(name: string) {
        this.name = name
    }
}

class Child extends Parent {
    constructor(name: string) {
        super(name)
    }
}

class Parent1 {
    private age: number
    constructor(age: number) {
        this.age = age
    }
}

const p1 = new Parent1(23)
console.log(p1)
// console.log(p1.age) error
// console.log(Parent1.age) error

class Child1 extends Parent1 {
    constructor(age: number) {
        super(age)
        // console.log(super.age) error
    }
}

// protected 受保护对象 不能拿到父类属性可以拿到父类方法
class Parent2 {
    protected age: number
    constructor(age: number) {
        this.age = age
    }
    protected getAge() {
        return this.age
    }
}

class Child2 extends Parent2 {
    constructor(age: number) {
        super(age)
        // console.log(super.age) error
        console.log(super.getAge())
    }
}