const carMakers = ['ford', 'toyota', 'honda'];

const date = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const cars = carMakers[0];
const myCars = carMakers.pop();

// Prevent incompatible value
// carsByMake.push(100) // will be error

// Help with 'map', 'forEach', 'reduce'
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2021-04-30');
importantDates.push(new Date());