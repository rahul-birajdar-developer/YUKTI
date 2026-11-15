import connectDataBase from "./db/dbconnect.js";
import express from "express"
import dotenv from "dotenv";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "1.0.0.1"]);

dotenv.config({
    path: "./.env"
})


const app = express();


connectDataBase().then(() => {

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server runing port on ${process.env.PORT}`)
    })
})