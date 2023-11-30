const { readFile, writeFile } = require("fs").promises;

const start = async () => {
	try {
		const first = await readFile("./content/first.txt", "utf8");
		const second = await readFile("./content/second.txt", "utf8");
		await writeFile(
			"./content/result-promise-require.txt",
			`This is awesome done with promise attched to require : ${first} ${second}`,
		);
		console.log(first, second + "using promise async await  to require");
	} catch (error) {
		console.log(error);
	}
};

start();
