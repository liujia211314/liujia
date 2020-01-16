const getArray = <T>(value: T, times: number = 5): T[] => {
    return new Array(times).fill(value)
}

console.log(getArray<number>(33))

const getArray1 = <T, U>(param1: T, param2: U, param3: number ): Array<[T, U]> => {
    return new Array(param3).fill([param1, param2])
}

console.log(getArray1(1, 'a', 3))
getArray1(1, 'a', 3).forEach((item) => {
    console.log(item[0])
    console.log(item[1])
})
let getArray2: <T>(arg1: T, times: number) => T[]
getArray2 = (arg1: any, times: number) => {
    return new Array(times).fill(arg1)
}

type GetArray = <T>(arg1: T, times: number) => T[]
let getArray3: GetArray = (arg1: any, times: number) => {
    return new Array(times).fill(arg1)
}

interface GetArray1 {
    <T>(arg1: T, times: number): T[],
}

let getArray4: GetArray1 =  (arg1: any, times: number) => {
    return new Array(times).fill(arg1)
}

// 泛型约束
interface ValueWithLength {
    length: number
}

const getArray5 = <T extends ValueWithLength>(arg: T, times: number): T[] => {
    return new Array(times).fill(arg)
}
// keyof 类型索引
const getProps = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName]
}

