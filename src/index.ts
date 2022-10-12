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
