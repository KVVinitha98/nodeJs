const names = require("./2-names");
const sayHi = require("./utils");

console.log(names);
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

const data = require("./3-alternative-flavor");
console.log(data);

// Require doen't actually need a variable
require("./4-mindGrinade");
