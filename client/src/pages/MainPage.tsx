import * as React from "react";
import { Page, Navbar, Button } from "framework7-react";

export const MainPage: React.FC = () => {
	return (
		<Page>
			<Navbar title="Главная страница" />
			<Button>Click</Button>
		</Page>
	);
};
