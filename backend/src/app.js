import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

import UserRouter from "./route/user.route.js"

const app = express();

//1 api fetch from anywhere
app.use(cors());

//2 if json data then express can parse json data
app.use(express.json({ limit: "16kb" }));
//3 if form data then express can parse form data
app.use(express.urlencoded({ extended: true }))


app.use("/api/v1/users", UserRouter);




export default app;