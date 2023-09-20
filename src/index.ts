import express from "express";
import { router } from "express-file-routing";
import * as url from "url";
import log from "./middlewares/log.js";
import logUpdate from "log-update";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

const routesdir = __dirname + "routes";
let requestCount = 0;

/**
 * you can use the global middlewares
 * app.use();
 */

app.use((req, res, next) => {
  requestCount++;
  next();
});

app.use(
  "/",
  await router({
    directory: routesdir,
  })
);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

setInterval(() => {
  logUpdate(`Request count: ${requestCount}`);
}, 100);
