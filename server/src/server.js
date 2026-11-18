
import dotenv from "dotenv";
import dns from "node:dns";
import app from "./app.js";
import connectDataBase from "./db/dbconnect.js";

// Load environment variables from the .env file.
// This must happen before accessing process.env variables.
dotenv.config({
    path: "./.env",
});

// Temporary DNS workaround for your local MongoDB Atlas connection.
// Remove this when deploying if the hosting environment resolves Atlas DNS correctly.
dns.setServers(["1.1.1.1", "1.0.0.1"]);

// Get the port from environment variables.
// Use 8000 as the default if PORT is not defined.
const PORT = process.env.PORT || 8000;

// Connect to MongoDB before starting the Express server.
connectDataBase()
    .then(() => {

        // Listen for Express application errors.
        app.on("error", (error) => {
            console.error("Express application error:", error.message);
            process.exit(1);
        });

        // Start the HTTP server after a successful database connection.
        const server = app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

        // Handle server startup and runtime errors.
        server.on("error", (error) => {
            console.error("Server error:", error.message);
            process.exit(1);
        });
    })
    .catch((error) => {
        // Stop the application if the database connection fails.
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    });
