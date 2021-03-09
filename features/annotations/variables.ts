let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// builds in object 
let now: Date = new Date();

// Array 
let colors: string[] = ['green', 'blue', 'red'];
let numbers: number[] = [12, 4, 5];
let truths: boolean[] = [true, false, true];

// Object 
class Car {

};
let car: Car = new Car();

// Object literal
let point: {x: number; y: number} = {
  x: 2,
  y: 5
}

// Function 
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// When to use annotations 
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variable on one line 
// and initalizate it later 
const words = ['red', 'green', 'blue'];
let foundWords: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWords = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let nums = [-10, -1, 2];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    numberAboveZero = nums[i];
  }
}