
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Create an Express application
const app = express();

/*
 * CORS (Cross-Origin Resource Sharing)
 * Allows your frontend to communicate with your backend
 * from a different origin.
 *
 * credentials: true allows cookies to be included
 * in cross-origin requests.
 */
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

/*
 * Parse incoming JSON request bodies.
 * Example: req.body.fullName
 *
 * The 10mb limit controls the maximum JSON payload size.
 */
app.use(express.json({ limit: "10mb" }));

/*
 * Parse incoming form data.
 * extended: true allows nested objects in URL-encoded data.
 */
app.use(
    express.urlencoded({
        extended: true,
        limit: "10mb",
    })
);

/*
 * Serve static files from the public directory.
 * Example: http://localhost:PORT/image.png
 */
app.use(express.static("public"));

/*
 * Parse cookies from incoming HTTP requests.
 * You can access them using req.cookies.
 */
app.use(cookieParser());

// Export the app so server.js can configure and start it.
export default app;
    