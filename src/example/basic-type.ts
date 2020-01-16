//布尔类型
let bool : boolean  = false;

//数值类型
let num : number = 111;

//字符串类型
let str : string = 'liujia'

//数组类型
let arr1 : number[] = [1,2,3];
let arr2 : Array<number> = [1,2,3];
let arr3 : (number | string)[] = [1,2,3];

//元组类型
let tuple : [string,number,boolean] = ['aa', 11, false];

//枚举类型
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER,
}

// const roles = 0;
// if( roles=== Roles.SUPER_ADMIN){
//     console.log('right')
// }

//any类型
let value:any;
value = 111;
value = 'bb';
let arr :any[] = ['sd',22,false];

//void类型
const consoleText = (text:string) : void =>{
    console.log(text)
}
consoleText('dfd')
//never类型
const errorFunc = (message:string) : never =>{
    throw new Error(message)
}
const infiniteFunc = () : never =>{
    while (true){}
}

const nevervariable = (() : never=>{
    while (true){}
})();

//object类型
let obj = {
    name : 'liuliu'
}
let obj1 = obj;
obj1.name = 'jiajia'
console.log(obj)
function getObject(obj:object) : void {
    console.log(obj)
}
getObject(obj1)

//类型断言
const getLength = (target : string | number ) : number=>{
    if((<string>target).length || (target as string).length === 0){
        return (<string>target).length
    } else {
        return target.toString().length
    }
}