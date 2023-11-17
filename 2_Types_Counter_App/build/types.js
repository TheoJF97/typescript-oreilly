"use strict";
/* TYPES - Simple and Special Types
There are 3 main simple types or primitives in JS and TS
1. Boolean - t/f
2. Number - whole numbers and floating point values
3. String - text values like "Typescript"
*/
let number = 4; // implicit typing - TS guesses the type
let first_name = "Theo"; //explicit typing
let isAlive = true;
console.log(number, first_name, isAlive);
/* TYPES - Special Types that may not refer to any specific type of data
        - any: disables typechecking and allows all types to be used
        - unknown: safer option to any, best used when we don't know the type of the variable
        - never: rarely used as it simply throws an error when it's defined
        - undefined: same as JS variable with an undefined value
        - null: Same as HS var with a null value
*/
// COUNTER APP
let title = "Counter App";
let h1El = document.querySelector("#title");
if (h1El)
    h1El.innerHTML = title.toUpperCase();
let counterValue = document.querySelector("#counterValue");
let countDownBtn = document.querySelector("#countDown");
let countUpBtn = document.querySelector("#countUp");
let resetBtn = document.querySelector("#reset");
let count = 0;
// Count Down button
countDownBtn === null || countDownBtn === void 0 ? void 0 : countDownBtn.addEventListener("click", (e) => {
    count--; //count = count(old) + 1
    if (counterValue)
        counterValue.innerHTML = count.toString();
});
// Count Up button
countUpBtn === null || countUpBtn === void 0 ? void 0 : countUpBtn.addEventListener("click", (e) => {
    count++; //count = count(old) + 1
    if (counterValue)
        counterValue.innerHTML = count.toString();
});
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", (e) => {
    count = 0; //count = count(old) + 1
    if (counterValue)
        counterValue.innerHTML = count.toString();
});
