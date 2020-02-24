import * as React from "react";
import Framework7 from "framework7/framework7-lite.esm.bundle.js";
import Framework7React from "framework7-react";
import {
	App as FwApp,
	View,
	Page,
	Navbar,
	Toolbar,
	Link
} from "framework7-react";
import { Framework7Params } from "framework7/components/app/app-class";
import { Router } from "framework7/modules/router/router";
import { MainPage } from "../pages/MainPage";

Framework7.use(Framework7React);

const f7params: Framework7Params = {
	name: "Scrum poker"
};

const routes: Router.RouteParameters[] = [{
	path: "/",
	component: MainPage
}];

export const App: React.FC = () => {
	return (
		<FwApp params={f7params} routes={routes}>
			<View main url="/" />
		</FwApp>
	);
};
