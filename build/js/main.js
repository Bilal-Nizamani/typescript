"use strict";
// let ame: string = 'Bilawal';
// let a: number = 123
// let b: string = 'bggg'
// let c: number = 123
// let d: number = a * c
// console.log(ame,a,c/a,c,d)
// lesson 2
// let myname: string = 'typescript'
//can't assing number to string type variable
// myname = 12312
// another string can be assinged
// myname = 'bilal'
// any can work with any type
// let newVar: any = 'stinrg'
// newVar = 123;
//  it's called union type it can be both number or string
// let speed: string | number = 'asdfaklsjdf';
// regex type
// let regex1:RegExp= /\w+/g
// fucntion with typesscript
// const  sum = (a:number,b:number) => {
//     return  a/b
// }
// let nreturnedValue: number = sum(123, 123)
// lesson 3
// let arr1 = ['one', 1, true]
// let arr2 = ['one', 'two']
// //arr2 = arr1  it wont work as arr1 has number string and bolean
// arr1 = arr1 // this will work but now arr1 will only store string now
// let arr3:string[] = ['aasdf'] //only string can stored here
// arr1[0] = 123
// // const myTyple: [string, number, boolean] = [123,123,'aasdfas',] it won't work because it only accect 3 elemnets and with the types that are defined
// // Example 1: Simple Number Array
// let numbers: number[] = [1, 2, 3, 4, 5];
// // Example 2: String Array
// let fruits: string[] = ['apple', 'banana', 'orange'];
// // Example 3: Mixed Type Array
// let mixedArray: (string | number)[] = ['apple', 2, 'orange', 4, 5];
// // Example 4: Array with predefined values
// let predefinedArray: Array<number> = Array(5).fill(0);
// // Example 5: Two-dimensional Array
// let matrix: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// // Example 6: Array of Objects
// interface Person {
//   name: string;
//   age: number;
// }
// let people: Person[] = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
// ];
// // Example 7: Array Methods (Map)
// let doubledNumbers: number[] = numbers.map(num => num * 2);
// // Example 8: Array Destructuring
// let [first, second, ...rest] = numbers;
// // Example 9: Filtering Array
// let evenNumbers: number[] = numbers.filter(num => num % 2 === 0);
// // Example 10: Reduce Array
// let sum1: number = numbers.reduce((acc, curr) => acc + curr, 0);
// object with typescript
