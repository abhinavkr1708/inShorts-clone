import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
dotenv.config();
import Connection from "./databases/db.js";
import DefaultData from "./default.js";
import route from "./routes/route.js";
app.use(cors());
app.use("/", route);
const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);
app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
DefaultData();
