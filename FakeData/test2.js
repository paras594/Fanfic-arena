const Validator = require("validator");

let text = "som3";

let result = Validator.isLength(text, { min: 2, max: 4 });

console.log(JSON.stringify(Validator.isLength));
console.log(result);
