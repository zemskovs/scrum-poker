type ApiRoots = string;

export class ApiClient {
	apiUrl = "http://localhost:3000";

	async fetch(apiRoot: ApiRoots) {
		return fetch(`${this.apiUrl}/${apiRoot}`).then(data => data.json()).catch(e => console.error(e));
	}

	async getTeams() {
		return this.fetch("teams").then(data => data.teams);
	}

	async getCards() {
		return this.fetch("voteCards");
	}
}
