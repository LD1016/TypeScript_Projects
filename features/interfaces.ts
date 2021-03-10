interface Vehicle {
  name: string, 
  year: Date,
  broken: boolean,
  summary(): string
}

interface Reportable {
  summary(): string
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
}

const coke = {
  name: 'coke',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `${this.name} has ${this.sugar} grams of sugar`;
  }

}

const printVehicle = (vehicle: {name: string; year: Date; broken: boolean}): void => {
  console.log(`
    Name: ${vehicle.name}
    Year: ${vehicle.year}
    Broken: ${vehicle.broken}
  `)
}
printVehicle(oldCivic);


const newPrintVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
}
newPrintVehicle(oldCivic);

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}
printSummary(oldCivic);
printSummary(coke);