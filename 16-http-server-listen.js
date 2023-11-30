//  Server listens to request
const http = require("http");

// using event emitter API
const server = http.createServer();
// emits request Event
// listen to it /respond to it
server.on("request", (req, res) => {
	res.end("Welcome");
});

server.listen(5000);
