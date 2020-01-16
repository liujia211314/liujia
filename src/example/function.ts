// function addNum(arg1: number, arg2: number): number {
//     return arg1 + arg2
// }
//
// const addNum1 = (arg1: number, arg2: number) => arg2 + arg2

// let addTest: (arg1: number, arg2: number) => number
// addTest = (arg1: number, arg2: number): number => arg1 + arg2
// addTest = (arg1: number, arg2: number) => arg1 + arg2
// let arg3 = 3
// addTest = (arg1: number, arg2: number) => arg1 + arg2 + arg3
//
// type Add = (x: number, y: number) => number

// let addTest5: Add = (arg1: number, arg2: number) => arg1 + arg2

// let addTest4: Add
// addTest4 = (arg1: number, arg2: number) => arg1 + arg2
// addTest4 = (arg1, arg2, arg3) => arg1 + arg2 + (arg3 ? arg3 : 0)
//
// type AddFunc = (arg1:number, arg2: number, arg3?: number) => number
// let addFunc: AddFunc
// addFunc = (x: number, y: number) => x + y
// addFunc = (x: number, y: number, z: number) => x + y + z
// let addFunc = (x: number, y = 3) => x + y
//
// const handleData = (arg1: number, ...arg2: number[]) => {
// // ...
// }

//函数重载
// function handelData1(x: string): string[]
// function handelData1(x: number): number[]
// function handelData1(x: any): any {
//     if (typeof x === 'string') {
//         return x.split('')
//     } else {
//         return x.toString().split('').map(item => Number(item))
//     }
// }
//
// console.log(handelData1('dfddddddddddddddddd'))
// console.log(handelData1(33333335454656))