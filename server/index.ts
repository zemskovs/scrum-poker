import * as http from "http"
import * as socketIo from "socket.io"
import { socketEvents } from "./socket";

const server = http.createServer();

const io = socketIo(server);

io.on("connection", (socket) => {
	socketEvents(socket)
})

server.listen(3000);
