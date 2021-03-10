class Vehicle {
    // public drive(): void {
    //   console.log('chugga chugga');
    // }

    // const color: string;
    // constructor(color: string){
    //   this.color = color;
    // }

    // Adding public to shorten the code above 
    constructor(public color: string) {}

    protected honk(): void {
      console.log('beep');
    }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  };

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const car = new Car(4, 'red');
car.startDrivingProcess();