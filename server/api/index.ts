import * as http from "http"
import * as socketIo from "socket.io"

const apiServer = http.createServer((req, res) => {
	if (req.url === "/teams") {
		const data = require("../dummy_data/teams.json")
		res.setHeader("Access-Control-Allow-Origin", req.headers.origin as string)
		res.end(JSON.stringify(data))
		return;
	}
	res.end("start server")
});

export { apiServer };