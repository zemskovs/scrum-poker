import * as React from "react";
import { Page, Navbar, Button, Block } from "framework7-react";
import { apiClient } from "../common/App";

type TeamRoomPageProps = {};

export const TeamRoomPage = props => {
	const [voitingStart, setVoitingStart] = React.useState<boolean>(false);
	const [cards, setCards] = React.useState<null | number[]>(null);

	const ws = new WebSocket("ws://localhost:3001");
	ws.onopen = event => {
		console.log(event);
	};

	ws.onmessage = event => {
		console.log(event.data);
		if (event.data === "voitingWasStarted") {
			apiClient.getCards().then(newCards => {
				setCards(newCards);
				setVoitingStart(true);
			});
		}
	};

	return (
		<Page>
			<Navbar title={props.teamName} backLink />
			<Block>
			{voitingStart ? (
				<>
					<p>Голосование начато</p>
					{cards != null && (
						<div className="row">
							{(cards as number[]).map((c, idx) => (
								<div className="col" key={c}>
									<div className={`elevation-1`}>{c}</div>
								</div>
							))}
						</div>
					)}
				</>
			) : (
				<p>Ожидание голосования</p>
			)}
			</Block>

			<Button
				onClick={() => {
					ws.send("startVoiting");
				}}
			>
				Начать голосование
			</Button>
		</Page>
	);
};
