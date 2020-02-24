import * as io from "socket.io-client"

class MessageManager {
	io = io('http://localhost:3000')


}

export const messageManager = new MessageManager();
