
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

// Function to connect the application with MongoDB
const connectDataBase = async () => {
    try {

        // Connect to MongoDB using the connection URL
        // DB_NAME specifies the database name
        const connectDB = await mongoose.connect(
            `${process.env.MONGO_URI}/${DB_NAME}`
        );

        // Display the database host after successful connection
        console.log(
            `Database connected successfully: ${connectDB.connection.host}`
        );

    } catch (error) {

        // Display the error if database connection fails
        console.log("ERROR:", error.message);

        // Stop the application because database connection failed
        process.exit(1);
    }
};

// Export function so it can be used in server.js
export default connectDataBase;
