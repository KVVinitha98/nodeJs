// Destructure directly from fs module
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

// to append text we use flag:a
writeFileSync(
	"./content/result-sync.txt",
	`Here is the result: ${first},${second}`,
	{ flag: "a" },
);
