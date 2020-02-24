import * as http from "http"
import * as socketIo from "socket.io"

const server = http.createServer();

const io = socketIo(server);

io.on("connection", (socket) => {
	console.log("connect")
})

server.listen(3000);
