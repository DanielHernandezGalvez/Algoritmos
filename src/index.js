import express from "express";
import ejs from "ejs"; //se puede poner o no porque está junto
import { dirname, join } from "path"; //evita pensar si estamos en windows, mac o linux
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.js"; //se puede poner el nombre que quiera

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(__dirname, "/views")
// console.log(join(__dirname, "views"))

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(indexRoutes)

app.use(express.static(join(__dirname, "public")))

app.listen(3000);
console.log("Server is run");
