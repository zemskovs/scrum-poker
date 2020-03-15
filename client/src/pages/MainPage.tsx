import * as React from "react";
import { Page, Navbar, Button, BlockTitle, Block, List, ListItem, Link } from "framework7-react";
import { t } from "../service/translate";
import { messageManager } from "../index";
import { apiClient } from "../common/App";

export const MainPage: React.FC = () => {
	const [teams, setTeams] = React.useState<any>(null);

	React.useEffect(() => {
		apiClient.getTeams()
			.then(teams => setTeams(teams));
	}, [])

	return (
		<Page>
			<Navbar title="Главная страница" />
			<Button onClick={() => messageManager.startSession()}>{t("Start Session")}</Button>
			{teams && (
				<>
					<BlockTitle>Команды</BlockTitle>
						<List>
							{teams.map(team => (
								<ListItem title={team.name} key={team.id} link={`team/${team.id}/${team.name}`}/>
							))}
						</List>
				</>
			)}
		</Page>
	);
};
