import * as React from "react";
import * as ReactDom from "react-dom";
import { App } from "./common/App";
import { MessageManager } from "./service/socket";


export const messageManager = new MessageManager();

ReactDom.render(<App />, document.getElementById("app"))
