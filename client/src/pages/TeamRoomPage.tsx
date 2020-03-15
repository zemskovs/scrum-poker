import * as React from "react";
import { Page, Navbar, Button } from "framework7-react";

type TeamRoomPageProps = {

}

export const TeamRoomPage = (props) => {
	const [voitingStart, setVoitingStart] = React.useState<boolean>(false);
	const ws = new WebSocket("ws://localhost:3001");
	ws.onopen = (event) => {
		console.log(event);
	};
	
	ws.onmessage = (event) => {
		if (event.data === "voitingWasStarted") {
			setVoitingStart(true);
		}
	}

	return (
		<Page>
			<Navbar title={props.teamName} backLink/>
			{voitingStart 
				? <p>Голосование начато</p>
				: <p>Ожидание голосования</p>
			}
			<Button 
				onClick={() => { 
					ws.send("startVoiting");
					setVoitingStart(true);
				}}
			>
				Начать голосование
			</Button>
		</Page>
	);
};