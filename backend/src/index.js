import { connectDB } from "./db/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import app from "./app.js"



connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`SERVER IS LISTENING at ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("::mongo db connection failed", err)
    })

