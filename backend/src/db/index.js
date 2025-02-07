import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"
import dotenv from "dotenv"
dotenv.config();


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(":: MongoDB connected !! ", connectionInstance);
    } catch (err) {
        throw err
    }
}

export { connectDB };