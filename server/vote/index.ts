import { VoteData } from "./types";

class VoteManager {
	private data: VoteData[] = [];
	private cards = [1, 3, 5, 8, 13];

	setVote(data: VoteData) {
		console.log("VOTEDATA", data)
		this.data.push(data);
	}

	get voteCards() {
		return this.cards;
	}

	getData() {
		return this.data;
	}
}

export const voteManager = new VoteManager();
