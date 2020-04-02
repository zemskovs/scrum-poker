import * as http from "http";
import * as socketIo from "socket.io";
import { voteManager } from "../vote";
import { VoteData } from "../vote/types";

export const apiServer = http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", req.headers.origin as string);

	const sendJsonData = (data: any) => res.end(JSON.stringify(data));

	const parsePostDate = (parseRequest: http.IncomingMessage) => {
		if (parseRequest.method == "POST") {
			let body = "";

			parseRequest.on("data", data => {
				body += data;
			});

			return JSON.parse(body);
		}
	};

	if (req.url === "/teams") {
		const data = require("../dummy_data/teams.json");
		sendJsonData(data);
		return;
	}

	if (req.url === "/voteCards") {
		sendJsonData(voteManager.voteCards);
		return;
	}

	if (req.url === "/setVote") {
		const date = parsePostDate(req);
		voteManager.setVote([date] as any);
	} //add Access-Control-Allow-Origin

	res.end("start server");
});
