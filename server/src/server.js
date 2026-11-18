import connectDataBase from "./db/dbconnect.js";
import express from "express"
import dotenv from "dotenv";
import dns from "node:dns";
import app from "./app.js";

dns.setServers(["1.1.1.1", "1.0.0.1"]);

dotenv.config({
    path: "./.env"
})


connectDataBase()
    .then(() => {

        app.on("error", (err) => {
            console.log("ERROR:", err.message);
            process.exit(1);
        }),

            app.listen(process.env.PORT || 8000, () => {
                console.log(`Server runing port on ${process.env.PORT}`)
            })
    })
    .catch((error) => {
        console.log("ERROR:", error.message);
        process.exit(1);
    })