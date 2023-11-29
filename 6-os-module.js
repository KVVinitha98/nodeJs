// Default os module that provides properties and methods to access opearting system
const os = require("os");

// Info about current user
const user = os.userInfo();
console.log(user);

// method returns sytem uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
};
console.log(currentOS);
