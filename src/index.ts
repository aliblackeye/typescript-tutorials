let a: number = 5;
let b: string = "Ali";
let c: boolean = true;
let d: any;
let f = [];
let e: any[];
let g: any[] = [1, "Ali", true];
let h: number[] = [1, 2, 3];
let i: [string,number,boolean] = ['Ali', 5, false];

// ! TYPE ASSERTIONS

let message;

message = "Hello World";

let count = (<string>message).length;
let length = (message as string).length;