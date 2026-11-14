import mongoose from 'mongoose';
import crypto from "node:crypto";

const roomCode = crypto.randomBytes(4)
    .toString("hex")
    .slice(0, 6)
    .toUpperCase();

const codingRoomSchema = new mongoose.Schema(
    {
        roomName: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 60,
        },
        language: {
            type: String,
            enum: ["javascript", "python", "java", "cpp"],
            default: "javascript",
            required: true,
        },
        roomCode: {
            type: String,
            required: true,
            unique: true,
            default: () =>
                crypto.randomBytes(4)
                    .toString("hex")
                    .slice(0, 6)
                    .toUpperCase(),
        },
        privacy: {
            type: String,
            enum: ["public", "private", "closed"],
            default: "public",
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const CodingRoom = mongoose.model('CodingRoom', codingRoomSchema);