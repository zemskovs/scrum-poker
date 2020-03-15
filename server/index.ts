import { apiServer } from "./api";
import { wsServer } from "./socket";

apiServer.listen(3000);
wsServer.listen(3001);