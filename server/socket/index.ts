import * as http from "http"
import  * as WebSocket  from "ws"

class WsServer {
    clients: WebSocket[] = [];
    listen(port: number) {
        const ws = new WebSocket.Server({ port });
        ws.on('connection', (ws) => {
            this.clients.push(ws);
            ws.on('message', (message) => {
              console.log('received: %s', message);
              if (message === "startVoiting") {
                //   this.clients.forEach(client => {
                //       if (client !== ws) {
                //           client.send("voitingWasStarted")
                //       }
				//   })
				ws.send("voitingWasStarted")
              }
            });
        });
    }
}

export const wsServer = new WsServer();
