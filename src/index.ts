let a: number = 5;
let b: string = "Ali";
let c: boolean = true;
let d: any;
let f = [];
let e: any[];
let g: any[] = [1, "Ali", true];
let h: number[] = [1, 2, 3];
let i: [string, number, boolean] = ["Ali", 5, false];

// ! TYPE ASSERTIONS

let message;

message = "Hello World";

let count = (<string>message).length;
let length = (message as string).length;

// ? FUNCTIONS

function getAverage(a: number, b: number, c?: number): string {
  let total = a + b;
  let count = 2;
  if (typeof c !== "undefined") {
    total += c;
    count++;
  }
  let average = total / count;
  return "The average is " + average;
}

const getAverage2 = (...a: number[]): string => {
  let total = 0;
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    total += a[i];
    count++;
  }

  let average = total / count;
  return "The average is " + average;
};

// * INTERFACES AND CLASSES

interface Point {
  x: number;
  y: number;
}

interface Passenger {
    name: string;
}

interface Vehicle {
    travelTo(point: Point): void;
}

class Taxi implements Vehicle{
    // private currentLocation: Point;

    constructor(private location: Point) {
    }

    travelTo(point: Point): void {
        console.log(`Taksi X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
        this.location = point;
    }
    getCurrentLocation() {
        console.log(`Konum: X:${this.location.x} Y:${this.location.y}`);
    }
}

let taxi_1: Taxi = new Taxi({x:0, y:0});
taxi_1.getCurrentLocation();
taxi_1.travelTo({x: 1, y: 2});
taxi_1.getCurrentLocation();