//
// const s1 = Symbol();
// console.log(s1)
// const s2 = Symbol();
// console.log(s2)
// // console.log(s1 === s2)
// const s3 = Symbol('jj')
// console.log(s3)
// const s4 = Symbol('jj')
// console.log(s4)
// // console.log(s3 === s4) false
// //Symbol不支持运算
// console.log(s4.toString())
// console.log(Boolean(s4))
// console.log(!s4)
// const prop = 're';
// const df = {
//     [`${prop}tr`] : 'erer'
// }
//
// const df1 = {
//     [s4] : 'ererf',
//     name : 'jaja',
//     gender:'girl'
// }
// console.log(df1[s4])
// for(let key in df1){
//     console.log(key)
// }
// console.log(Object.keys(df1))
// console.log(Object.getOwnPropertyNames(df1))
// console.log(JSON.stringify(df1))
// console.log(Object.getOwnPropertySymbols(df1))
// console.log(Reflect.ownKeys(df1))
//
// // Symbol.for()  Symbol.keyFor()
// const s11 = Symbol.for('niuniu');
// const s22 = Symbol.for('niuniu');
// // console.log(s11 === s22) true
// const s33 = Symbol.keyFor(s22);
// console.log(s33)
//
// const obj1 = {
//     [Symbol.hasInstance](otherObj){
//         console.log(otherObj)
//     }
// }
// console.log({a:'a'} instanceof <any>obj1)
// let arr :number[] = [1, 2];
// arr[Symbol.isConcatSpreadable] = false;
// console.log([].concat(arr,[3,4]));
// console.log(arr)
//
// class C extends Array{
//     constructor(...args){
//         super(...args)
//     }
//     static get[Symbol.species]{
//         return Array
//     }
//     getName(){
//         return 'jiajia'
//     }
// }
//
// const c = new C(1,2,3)
// const a = c.map(item => item + 1)
// console.log(c)
// console.log(a instanceof C) //false
// console.log(a instanceof Array) //true
//
// let obj3 = {
//     [Symbol.match](string){
//         console.log(string.length)
//     }
// }
//
// 'abckld'.match(<RegExp>obj3)
// // Symbol.replace
// // Symbol.search
// // Symbol.split
//
// let obj4 = {
//     [Symbol.toPrimitive](type) {
//         conosle.log(type)
//     }
// }
// // const res = (obj4 as number)++
// // const res = `sd${obj4}dd`
//
// // let obj5 = {
// //     [Symbol.toStringTag] : 'jiajia'
// // }
// let obj5 = {
//     get [Symbol.toStringTag]() {
//         return 'jiajia'
//     }
// }
//
// console.log(obj5.toString())
