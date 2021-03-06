type Event = string;

export class MessageManager {
	ws = new WebSocket("ws://localhost:3001");

	subscribe(eventMessage: Event, cb: () => void) {
		this.ws.onmessage = event => {
			if (event.data === eventMessage) {
				cb();
			}
		};
	}

	emit(eventMessage: Event) {
		this.ws.send(eventMessage)
	}
}
