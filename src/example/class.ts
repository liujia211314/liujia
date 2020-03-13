class Point {
    public x: number
    public y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    public getPosition() {
        return `[${this.x}, ${this.y}]`
    }
}

const point = new Point(2, 3)
console.log(point)

class Parent {
    public name: string
    constructor(name: string) {
        this.name = name
    }
}
class Child extends Parent {
    constructor(name: string) {
        super(name);
    }
}

// public
// private

class ParentPrivate {
    private age: number
    constructor(age: number) {
        this.age = age
    }
}
const pp = new ParentPrivate(18)
console.log(pp)
// console.log(pp.age) error
// console.log(ParentPrivate.age) error

class ChildPrivate extends ParentPrivate {
    constructor(age: number) {
        super(age);
        // console.log(super.age)
    }
}

// protected 受保护修饰符 可以拿到父类属性但是不可以拿到方法
class ParentProtected {
    protected age: number
    constructor(age: number) {
        this.age = age
    }
    protected getAge() {
        return this.age
    }
}
class ChildProtected extends ParentProtected {
    constructor(age: number) {
        super(age)
        // console.log(super.age) error
        console.log(super.getAge())
    }
}

const childProtected = new ChildProtected(19)
console.log(childProtected)

class UseInfo {
    public readonly name: string
    constructor(name: string) {
        this.name = name
    }
}
const useInfo = new UseInfo('liujia')
console.log(useInfo)
// useInfo.name = 'jj' error