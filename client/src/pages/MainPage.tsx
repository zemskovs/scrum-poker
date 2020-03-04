import * as React from "react";
import { Page, Navbar, Button } from "framework7-react";
import { t } from "../service/translate";
import { messageManager } from "../index";

export const MainPage: React.FC = () => {
	return (
		<Page>
			<Navbar title="Главная страница" />
			<Button onClick={() => messageManager.startSession()}>{t("Start Session")}</Button>
		</Page>
	);
};
