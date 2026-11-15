import connectDataBase from "./db/dbconnect.js";
import express from "express"
import dns from "node:dns"


const app = express();

connectDataBase().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server runing port on ${process.env.PORT}`)
    })
})