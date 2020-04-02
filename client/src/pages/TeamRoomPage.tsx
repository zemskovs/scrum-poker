import * as React from "react";
import { Page, Navbar, Button, Block } from "framework7-react";
import { apiClient } from "../common/App";
import { messageManager } from "..";

type TeamRoomPageProps = {
	teamName?: string;
};

export const TeamRoomPage: React.FC<TeamRoomPageProps> = props => {
	const [voitingStart, setVoitingStart] = React.useState<boolean>(false);
	const [cards, setCards] = React.useState<null | number[]>(null);

	React.useEffect(() => {
		messageManager.subscribe("voitingWasStarted", () => {
			apiClient.getCards().then(newCards => {
				setCards(newCards);
				setVoitingStart(true);
			});
		});
	});

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
									<div
										className="col"
										key={c}
										onClick={() => apiClient.setVote(c)}
									>
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
					messageManager.emit("startVoiting");
				}}
			>
				Начать голосование
			</Button>
		</Page>
	);
};
