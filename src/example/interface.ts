
// const getFullName = ({firstName,lastName})=>{
//     return`${firstName}${lastName}`
// }
// console.log(getFullName({
//     firstName:'liu',
//     lastName:18,
// }))

interface NameInfo {
    firstName: string,
    lastName: string,
}
const getFullName = ({firstName, lastName}: NameInfo): string => {
    return`${firstName}${lastName}`
}
const aaa = getFullName({
    firstName: 'sdf',
    lastName: 'sdf',
})

 // console.log(aaa)
interface Vegetables {
    color?: string,
    type: string,
    [props: string]: any
} //属性签名（1）
const getVegetables = ({ color, type }: Vegetables): string => {
    return `A ${color ? color : "" } ${type}`
}

console.log(getVegetables({
    // color: 'red',
    type: 'tomato',
}))
console.log(getVegetables({
    // color: 'red',
    type: 'tomato',
    size: 2,
} as Vegetables)) //属性断言

const vegetableInfo = {
    color: 'red',
    type: 'tomato',
    size: 2
}

console.log(getVegetables(vegetableInfo)) //类型赋值


interface Vegetables1 {
    color?: string,
    readonly type: string,
}

let vegetableObj: Vegetables1 = {
    type: 'tomato',
}

 // vegetableObj.type = 'dfdfd'  // error  read-only
interface OnlyArr {
    0: string,
    readonly 1: number
}

let onlyArr: OnlyArr = ['sd', 22]
// onlyArr[1] = 44;  Cannot assign to '1' because it is a read-only property.

type addFunc = (num1: number, num2: number) => number
const add: addFunc = (n1, n2) => n1 + n2
interface NumInter {
    [id: number]: string
}

let role1: NumInter = {
    1: 'ddd',
}

interface StrInter {
    [id: string]: string
}

let role2: StrInter = {
    a: 'dfd',
    1: 'dfd',
}

//接口的继承

interface Vegetable {
    color: string
}

interface Tomato extends Vegetables{
    type: string
}

let tomato: Tomato = {
    color: 'red',
    type: 'tree',
}
interface Counter {
    (): void,
    count: number,
}

const getCounter = (): Counter => {
    const c = () => { c.count ++ }
    c.count = 0
    return c
}

const counter = getCounter()

counter()
console.log(counter.count)
counter()
console.log(counter.count)
counter()
console.log(counter.count)