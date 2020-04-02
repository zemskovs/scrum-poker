type ApiRoots = string;

export class ApiClient {
	apiUrl = "http://localhost:3000";

	async fetch(apiRoot: ApiRoots, options?: RequestInit) {
		return fetch(`${this.apiUrl}/${apiRoot}`, options)
			.then(data => data.json())
			.catch(e => console.error(e));
	}

	async getTeams() {
		return this.fetch("teams").then(data => data.teams);
	}

	async getCards() {
		return this.fetch("voteCards");
	}

	async setVote(c) {
		return this.fetch("setVote", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			mode: "cors",
			body: JSON.stringify({user: "Test", session: "Test", card: c})
		});
	}
}
