"use strict";
// // Lesson 1: Basic Types
// let name: string = 'Bilawal';
// let a: number = 123;
// let b: string = 'bggg';
// let c: number = 123;
// let d: number = a * c;
// console.log(name, a, c / a, c, d);
// // Lesson 2: Type Inference and Any Type
// let myName: string = 'typescript';
// // Uncommenting the line below will result in a type error
// // myName = 12312;
// myName = 'bilal';
// let newVar: any = 'string';
// newVar = 123;
// let speed: string | number = 'asdfaklsjdf';
// let regex1: RegExp = /\w+/g;
// // Lesson 3: Arrays and Tuples
// let arr1 = ['one', 1, true];
// let arr2 = ['one', 'two'];
// // Uncommenting the line below will result in an error
// // arr2 = arr1;
// arr1 = arr1;
// let arr3: string[] = ['aasdf'];
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
// // Lesson 4: Objects and Types
// type Guitarist = {
//     name: string;
//     active: boolean;
//     albums: (string | number)[];
// };
// let singer1: Guitarist = {
//     name: 'bilal',
//     active: false,
//     albums: [1, 3, 'asldkfj'],
// };
// const lumber1 = (guitarist: Guitarist) => {
//     return `Hello ${guitarist.active}`;
// };
// console.log(lumber1(singer1));
// // Uncommenting the lines below will result in an error
// // singer1.albums.push(12321);
// // singer1.albums.push(123);
// // Lesson 5: Enums and Interfaces
// enum Grade {
//     A = 1,
//     B,
//     C,
//     D
// }
// interface Programmer {
//     experience: string;
//     age?: number;
//     name: string;
//     available: boolean;
// }
// type StringNumber = string | number;
// type StringOrNumberArray = (string | number)[];
// // Lesson 6: Literal Types, Functions, and Type Aliases
// let userName: 'bilal' | 'hamza';
// userName = 'bilal';
// const add = (a: number, b: number, c?: any): void => {
//     console.log(c ? a + b + c : a + b);
// };
// const add2 = (a: number, b: number): number => {
//     return a + b;
// };
// // Uncommenting the line below will result in a type error
// // add(123, 123, 'bilb');
// console.log(add2(123, 123));
// type MathFunction = (a: number, b: number) => number;
// const multiply: MathFunction = (a, b) => {
//     return a + b;
// };
// console.log(multiply(1, 2));
// const total = (a: number, ...nums: number[]): number => {
//     return a + nums.reduce((prev, curr) => prev + curr);
// };
// // Uncommenting the line below will result in an error
// // createError('Some error message');
// console.log(total(1, 2, 3, 3, 3, 3, 3, 3, 3, 3));
//  type assertion
// type one = string
// type two = string | number
// type three = string | number | boolean
// type four = 'four'
// // Type Assertion Examples
// // Type 'one' assertion
// let valueOne: any = 'Hello'; // We have a variable 'valueOne' of type 'any' (could be any type)
// let assertionOne: one = valueOne as one; // We assert that 'valueOne' is of type 'one'
// // Type 'two' assertion
// let valueTwo: any = 123; // 'valueTwo' is of type 'any' (could be any type)
// let assertionTwo: two = valueTwo as two; // We assert that 'valueTwo' is of type 'two'
// // Type 'three' assertion
// let valueThree: any = true; // 'valueThree' is of type 'any' (could be any type)
// let assertionThree: three = valueThree as three; // We assert that 'valueThree' is of type 'three'
// // Type 'four' assertion
// let valueFour: any = 'four'; // 'valueFour' is of type 'any' (could be any type)
// let assertionFour: four = valueFour as four; // We assert that 'valueFour' is of type 'four'
// // Alternatively, using angle bracket syntax
// let assertionOneAlt: one = <one>valueOne; // Same assertion using angle bracket syntax
// let assertionTwoAlt: two = <two>valueTwo; // Same assertion using angle bracket syntax
// let assertionThreeAlt: three = <three>valueThree; // Same assertion using angle bracket syntax
// let assertionFourAlt: four = <four>valueFour; // Same assertion using angle bracket syntax
// // Note: Type assertion is not type conversion. It's a way to override the type inferred by TypeScript.
// const elem = document.getElementById('this')as HTMLElement
// const btn =<HTMLButtonElement>document.getElementById('button') 
//     btn.onclick = () => {
//         if (elem.innerHTML !== 'Hello Gandalf') elem.innerHTML = 'Hello Gandalf';
//         else  elem.innerHTML = 'By Gandalf';
//     };
