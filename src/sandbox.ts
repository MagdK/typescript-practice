let greet: Function;

// greet = 'hello' // will throw me an error

greet = () => {
    console.log("hellooow");
}

// if I place a question mark in front (c parameter) of it, that means the parameter is optional
// I can set up a default value too, like 10 below for C
// question mark and default parameter is usually not used together
const add = (a: number, b: number, c?: string | number) => {
    console.log(a + b);
    console.log(c); // it will throw undefined if no c parameter is added to the function below when it is called
}

/* const add2 = (a: number, b: number, c: string | number = 10) => {
    console.log(a + b);
    console.log(c); // it will throw undefined if no c parameter is added to the function below when it is called
} */

add(5, 10); // only accepts numbers


// Return type of the result of the function goes automatically, we don't have to declear it
const minus = (a: number, b: number) => {
    return a - b;
}

let result = minus(6, 3); // the type of result will be a number - based on what type of data we return
//  result = 'macska' // this won't work, because the type is set to number