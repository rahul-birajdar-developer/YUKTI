
import mongoose from "mongoose";

// Define the structure and validation rules for users.
const userSchema = new mongoose.Schema(
    {
        // User's full name
        fullName: {
            type: String,
            required: [true, "Full name is required"],
            trim: true,
            minlength: 2,
            maxlength: 60,
        },

        // Unique username for each user
        userName: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            lowercase: true,
            trim: true,
            minlength: 3,
            maxlength: 20,
        },

        // User's email address
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                "Please enter a valid email address",
            ],
        },

        // Store the hashed password, never the original password.
        password: {
            type: String,
            required: [true, "Password is required"],
            select: false, // Excludes password from normal queries
        },

        // Defines the user's access level
        role: {
            type: String,
            enum: ["student", "faculty", "admin"],
            default: "student",
        },
        refreshToken: {
            type: String,
        },
    },
    {
        // Automatically creates createdAt and updatedAt fields.
        timestamps: true,
    }
);

// Create and export the User model.
export const User = mongoose.model("User", userSchema);
