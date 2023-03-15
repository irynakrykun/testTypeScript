const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
// let age: number;
// let name: string;
// let toggle: boolean;
// let empty: null;
// let notInitialize = undefined;
// let callback = (a: number) => number;
//  age = 50;
// name = 'Max';
//  toggle = true;
//  empty = null;
//  notInitialize = undefined;
//  callback = (a) => { return 100 + a };
// ******************************************************************************************

// let anything:any = -20;
// anything = 'Text';
// anything = {};
// *******************************************************************************************
// let some:unknown;
// some = 'Text';

// let str: string;
// if (typeof some === 'string') {
//   str = some;
// }
// ********************************************************************************************
let person: [string,number]


person = ['Nana', 21];

// *****************************************************************************************


