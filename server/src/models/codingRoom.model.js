
import mongoose from "mongoose";
import crypto from "node:crypto";

// Generate a unique room invitation code.
const generateRoomCode = () => {
    return crypto.randomBytes(4)
        .toString("hex")
        .slice(0, 6)
        .toUpperCase();
};

// Define the CodingRoom schema.
const codingRoomSchema = new mongoose.Schema(
    {
        // Name of the coding room
        roomName: {
            type: String,
            required: [true, "Room name is required"],
            trim: true,
            minlength: 2,
            maxlength: 60,
        },

        // Programming language used in the room
        language: {
            type: String,
            enum: ["javascript", "python", "java", "cpp"],
            default: "javascript",
            required: true,
        },

        // Unique code used to join a room
        roomCode: {
            type: String,
            required: true,
            unique: true,
            default: generateRoomCode,
        },

        // Controls who can access the room
        privacy: {
            type: String,
            enum: ["public", "private", "closed"],
            default: "public",
        },

        // Current room status
        status: {
            type: String,
            enum: ["active", "inactive", "closed"],
            default: "active",
        },

        // Reference to the user who created the room
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        // Automatically adds createdAt and updatedAt
        timestamps: true,
    }
);

// Create and export the CodingRoom model.
export const CodingRoom = mongoose.model("CodingRoom", codingRoomSchema);
