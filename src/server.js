import app from "./app.js";
import env from "./config/config.js";
import { conectDB } from "./config/database.config.js";

const server = app


server.listen(env.PORT, () => {
    console.log(`Server on http://localhost:${env.PORT}/api`)
    conectDB();
})