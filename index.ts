import inquirer from "inquirer";
import chalk from "chalk";

// 1-  Describe how asynchronous call backs differ from asynchronous code execution?

// synchronous example:
// console.log(chalk.blue.bold("Before synchronous operation"));

// // Simulate asynchronous blocking operation :
// for (let i = 0; i < 1e9; i++) {}   // A Long Loop.
//     console.log(chalk.green.bold("After synchronous operation"));

// // Asynchronous example :
// console.log(chalk.yellow.bold("Before asynchronous operation"));
// setTimeout(function () {
//     console.log(chalk.green.bold("Asynchronous operation completed"));
// },1000);
// console.log(chalk.red.bold("After synchronous operation setuptime"));



// // 2- Explain the concept of the event loop in javascript with an example?

// console.log(chalk.green.bold("start"));

// setTimeout(() => {
//     console.log("callbacks executed");
// },0);
// console.log(chalk.red.bold("End"));


// // 3- Demonstrate the use of the settimeout() function to execute code after on delay ?

// setTimeout(() => {
//    console.log(chalk.yellow.bold("This message is shown after a 2- second delay"));
// },2000);


// // 4- Explain how to handle error in a callback pattern ?

// // function that   uses callback pattern :
// function fetchData(
//     callback:(error: Error | null, data: string) => void
// ): void{
//     // Simulate  an error condition:
//     const error = new Error("Failed to fetch data");
//     const data = "some data";

//     // simulate fetching data with a chance of error:
//     if(Math.random() > 0.5) {
//         callback(null, data); // No error ,data is fatched successfully
// } else {
//     callback(error,data); // Passes error to callback
// }
// };
// // using the fetchData functin with error handling in the callback:
// fetchData((error, data) => {
//     if(error) {
//         console.log(chalk.red.bold(error.message)); // handle the error
//     } else {
//         console.log(chalk.yellow.bold(data));  //Process the data
//     }   
// });



// // 5 - Show an exampe of a callback function used to fiter an array of numbers?

// // This array of numbers will be fllered :
// const numbers :number[ ]= [1,2,3,4,5,6,7,8,9,10];

// // uses.filter() callback function filter out numbers greater than 5:
// const filteredNumbers : number[] =  numbers.filter(number=>number > 5);

// // //  callback function check each number and filtered create a new array with numbers meet all criteria:

// // const filteredNumbers2 : number[] =  numbers.filter(number=>number > 5).filter(number=>number % 2 === 0);

// console.log(chalk.green.bold(filteredNumbers));
// // console.log(filteredNumbers2);


// // 6 -Create a function that accepts a callback and invokes the it with  same arguments?

// // invokes  it with given arguments:
//  function executecallback(
//      callback:(arg1: number , arg2: number) => void ,
//  arg1 : number, arg2 : number

// ) : void {
//     callback(arg1,arg2);  //callbacks with specified arguments
// }

// // // example callbacks functionthat add to number of arguments:

// let add1 = (a : number, b : number) => {
//     console.log(chalk.green.bold(a + b)); ///out put sum of a and b
// };
// executecallback(add1, 6 , 3);  //out put sum of 9



// // 7 -Explain the usees of the promise.all() method with an example

// const promise1 = Promise.resolve(25);
// const promise2 = 82;
// const promise3 = new Promise <string> ((resolve) => {
//     setTimeout(resolve, 100, "foo");
// });
// Promise.all([promise1, promise2, promise3]).then((values: any) => {
//     console.log(values);
// });


// // 8 - Show how to use the .then() and .catch() methods to handle promise resolution and rejection ?

// // resolves or rejects based on the conditions :
// const conditionalsPromise = new Promise<string>((resolve, reject) => {
// const success = Math.random() > 0.5;   // randomly chosen success value or failure value:
// if (success) {
//     resolve("Success !");
// } else {
//     reject(new Error("Failure!"));
// }
// });

// conditionalsPromise
// // Either it will run the method with .then()
//   .then((message) => 
//        console.log(chalk.blue.bold(message)));  //handler a success message resolution

// // //  any one method .then() OR .catch() will run the code

// // //   or it will run the method with . catch()
// //     //  .catch((error) =>
// //     //       console.log(error.message));  //handler a failure message rejection


// // 9 - create a promise that resolves with "Hello World" after 2 seconds ?

// const helloPromise = new Promise<string>((resolve) => {
//     setTimeout(() => {
//         resolve("Hello World!");
//     },2000);
// });
// helloPromise.then((message) => console.log(chalk.blue.bold(message)));
        

// // 10 -Discus the significance of th awit reserved  word in asynchronous javascript ?

// async function fetchData1() {
//     // Assuming fetchsomething is returning a promise:
//     const data = await fetchSomething();
//     console.log(data);
// }
// console.log(chalk.green.bold("The 'await keyword allows asynchronous,\n promise-based behavior to be written in a cliener,\n more linear fashion."));




// // 11 -Explain the errrors that occur when trying to use reserved words as a variable name ?

// // Should avoid using reserved words:
// // let if = 5;  //This line would cause syntax errors:

//  console.log(chalk.red.bold("using reserved words as a variable name causes a syntax error in javascript"));


// // 12 - List  ther reserved words in javascript creat a valid use case for each ?

// // Reserved words : let - used to declare a blockscoped lacal variable
//  let count = 5;

// // // Reserved words :if - used to execute a block of code  is specified condition is true:
//  if (count > 0) {
//    console.log(chalk.green.bold("count is greater than 0"));
//  } 
// // // Reserved words :Return - used to exit a function and return a value from that function:
// function add(a: number , b:number){
//     return a + b;
//  }
//  console.log(chalk.yellow.bold(add(5,6)));



// // 13 - Decribe how to use breakpoints in browsers development tools to debug javascript code ?

// console.log(chalk.blue.bold("Before breakpoint "));

// console.log(chalk.green.bold("This  line has a breakpoint set on it in the browser's devloper tools."));

// console.log(chalk.yellow.bold("After breakpoint "));


// // 14 -Implement a try catch block to handle potentially err in a block code ?

// //  try {
// //     // Intentionally cause an error
// //     throw new Error("Something went wrong");
// // } catch (error){
// // console.log(error.message);  //log the error message
// // }

   
// // 15 -use console.log() to debug the and trrack the value of a variable inside a loop ?


// for (let i = 1; i <= 5; i++) {
//     console.log(chalk.green.bold(`Iteration = ${i}, i value : , i`));
// }

// // 16 -Explain how to can  format a JSON string with proper indentation for readability ?

// const person_ = {
//     name: "John",
//     age: 30,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "author"],
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY",
//         zip: 10001,
//     },
// };
// // // convert  the object to JSON string with proper indentation :
//  const json = JSON.stringify(person_,null,2); //this specifies the number use a whitespace:

//  console.log(chalk.blue.bold(json));

// // OUTPUTS:
// //  {
// //  * "name": "John",
// //  * "age": 30
// //  * "city": "London",
// //  * "hobbies": ["Sports", "Cooking"]
// //  * "role": [2, "author"],
// //  * "address": {
// //           street: "123 Main St",
// //         city: "New York",
// //         state: "NY",
// //         zip: 10001,
// //     }, 
// //  }
 

// // 17 - Take a JSON string and parse it into javascript object ?

// // Define a JSON string :
//  let jsonString = '{"name":"John","age":30,"city":"London","hobbies":["Sports","Cooking"],"role":[2,"author"],"address":{"street":"123 Main St","city":"New York","state":"NY","zip":10001}}';
// // //  Parses the JSON string back into javascript object:
//  let $person = JSON.parse(jsonString);
//  console.log(chalk.green.bold($person));  //covert it back into javascript object.


// // 18 -Write a javascript object and convert it to jason string :

// // Define a javascript object :
// let person1 = {
//     name: "John",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY",
//         zip: 10001,
//     },
// };
// // // Convert the object into into  a string :
//  const $json = JSON.stringify(person1);

//  console.log(chalk.yellow.bold($json));


// // 19 - Discuss the difference between the default and the named exports in javascript modules ?

// // Impoting named exports:
// import { utilone, utiltwo } from "./utils.js";

// // Imoting default exports:
// import calculator from "./calculator.js";

// // 20 - Create two modules; one that exports a class and another that imports the class and creates an instance of ?

// // In another files:
// import {person} from "./person.js";
// const alice = new person("Alice");
// alice.greet();


// function fetchSomething() {
//     throw new Error("Function not implemented.");
// }
// console.log(chalk.red.bold("fetchSomething"));



// 21 -Enhanced laptop object construct an object for a laotop including  properties make ,model,year and  method describe() thats log  a sentence about the laptop ?

let laptop = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2020,
    describe: function(){
        console.log(chalk.yellow.bold(`This laptop is a ${this.make} ${this.model} from ${this.year}`));
    }
};
laptop.describe();

// OR................................................................

let $laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2024,
    describe: function(){
        console.log(chalk.green.bold(`This laptop is a ${this.make} ${this.model} from ${this.year}`));
    }
};

$laptop.describe();



//  23- Destructuring :Given an array of objects representing different laptop each with different properties make, model, and year use arrays of destructuring to assign  the first and second laptop to variables.then..log these variables ?

let laptops = [
    {
        make: "Asus",
        model: "Asussian",
        year: 2020,
    },
    {
        make: "hp",
        model: "intel core i7",
        year: 2024,
    },
    {
        make: "samsung",
        model: "intel core i5",
        year: 2022,
    }
];
const  [laptop1,laptop2,laptop3] = laptops;
console.log(laptop1,laptop2,laptop3);


// 24 - Combining arrays with separated operators.supose your are comparing price of two different set of laptop.use the sepread operator to combine these arrays together in to single array storage in asending order, the log the result ?

let pricesset1 = [1200,1500,1700,1100];

let pricesset2 = [1300,1600,1400,1200];

let combinedPrices = [...pricesset1,...pricesset2].sort ((a,b) => a-b);
console.log(combinedPrices);



// 25 - Function with rest parameters : write a function that take a rest parameter representing multiple hobbies .it  should log each hobbies with a statment saying you enjoy that body.

function hobbies(...hobbies:string[]){
    for (let hobby of hobbies){
        console.log(chalk.blue.bold(`I enjoy ${hobby}`));
    }
};

hobbies("Sports","Cooking","Reading");

// OR.................................................................

function loghobbies(...hobbies:string[]){
    hobbies.forEach(hobby => {

    console.log(chalk.yellow.bold(`I enjoy ${hobby}`));
    });
};

loghobbies("cycling","swimming","coding");

// 26 - Multiple templates literal : create  a multiple string that describes your  ideal day.include at least three different activities ?

let $idealDay = (chalk.green.bold(`MY Ideal day would involve different activities:
1- I want to have a nice day.
2- I want to have a cup of tea..
3- Waking up early and  going for a jog.
4- I want to have a good food.
5- Spending a few hours coding on a personal project.
6-I want to have a good cycling.
7-I want to have a good sports.
8- Ending the day by reading good books and I want to have a good sleep.
`));
console.log($idealDay);


// 27- Refactoring to arrow functions.Take a simple function that calculates the area of the rectangle and refactor it into an arrow function.


// calculate the area of the rectangle:
function calculateArea(width: number, height: number) : number {
return width * height;    
}
// refactor in to arrow functions:
let calculateAreaArrow = function(width: number, height: number) : number  {
   return width * height
}
console.log(chalk.yellow.bold(calculateAreaArrow(10,20)));


// 28- Make a smartphone object created a simple way to keep track of a smartphone's details/ include its brand model and other key features like how much storage it has the size of screen and how long  it battery lasts.

// setup details about smartphone :
let smartphone = {
    make : "samsung",
    model : "Galaxy S24",
    year : 2024,
    specs : {
    storage : "128GB",
    screenSize : "6.5 inches",
    batteryLife : "100hours",
}
};
// show the setup :
console.log(smartphone);
console.log(chalk.yellowBright(smartphone.make));
console.log(smartphone.specs);


// 29- Pulling Apart a Nested object : imagine you have a list inside another list that  show  what a computer program know like coding languages tools and software frameworks. find a way to get three specific skills from the list and show them ?

let developerSkills = {
    languages : ["JavaScript","Python","C++","typescript"],
    tools : ["Git","VSCode","Terminal","XML","Webpack","Docker"],
    frameworks : ["React","Angular","Vue"],
};
// Getting specific skills from the list:
let {languages,frameworks,tools} = developerSkills;

// Showing specific a skills from each cataegory :
console.log(chalk.yellow.bold(`languages: ${chalk.red.bold(languages[0])},frameworks: ${chalk.red.bold(frameworks[0])},tools: ${chalk.red.bold(tools[0])})`));


// 30- Making Flexible Object Keys: Learn how to set up a list where you can change the name of y eacch section and based on what you need that moment like adjusting labels based on user choice ?

// flexiible list function:

function createObjectwithDynamicKey(key: string, value: string){
    let dynamicObject = {};
    dynamicObject = value;
    return dynamicObject;
};
// using the function:
let userChoice =
    createObjectwithDynamicKey("theme","dark",);
    console.log(chalk.blue.bold(userChoice));
