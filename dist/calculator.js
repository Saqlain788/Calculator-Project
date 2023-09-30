#! /usr/bin/env node
import inquirer from "inquirer";
import { sum, substraction, multiplication, division } from "./function.js";
import showBanner from "node-banner";
import gradient from "gradient-string";
let answers = [
    {
        name: "num1",
        type: "number",
        message: gradient.cristal("Enter first number:"),
    },
    {
        name: "num2",
        type: "number",
        message: gradient.rainbow("Enter second number:"),
    },
    {
        name: "operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        message: gradient.cristal("Operations:"),
    },
];
let answer = [
    {
        name: "again",
        type: "confirm",
        message: "Do you want to enter again",
    },
];
(async () => {
    await showBanner("Calculator", "This app perform some mathematical functions", "red", "blue");
})();
async function calculator() {
    let condition = true;
    while (condition) {
        let { num1, num2, operator } = await inquirer.prompt(answers);
        if (operator === "+") {
            console.log("The sum of num1 and num2:", sum(num1, num2));
        }
        else if (operator === "-") {
            console.log("The difference of num1 and num2:", substraction(num1, num2));
        }
        else if (operator === "*") {
            console.log("The multiplication of num1 and num2:", multiplication(num1, num2));
        }
        else {
            console.log("The division of num1 and num2:", division(num1, num2));
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
}
setTimeout(() => {
    calculator();
}, 1000);
