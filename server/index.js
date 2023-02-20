import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Routes from "./routers/route.js";
import Connection from "./database/db.js";

const app = express();

const port = process.env.PORT;

dotenv.config();
app.use(bodyParser.json({ extented: true }));
app.use(bodyParser.urlencoded({ extended: true }));

Connection();
app.use(cors());
app.use("/", Routes);

app.listen(port, () => console.log("success"));
