import * as http from "http";
import * as socketIo from "socket.io";
import { voteManager } from "../vote";

export const apiServer = http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", req.headers.origin as string);

	const sendJsonData = (data: any) => res.end(JSON.stringify(data));

	if (req.url === "/teams") {
		const data = require("../dummy_data/teams.json");
		sendJsonData(data)
		return;
	}

	if (req.url === "/voteCards") {
		sendJsonData(voteManager.voteCards)
		return;
	}

	res.end("start server");
});
