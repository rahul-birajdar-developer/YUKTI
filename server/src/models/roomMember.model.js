import mongoose from "mongoose";

const roomMemberSchema = new mongoose.Schema({
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CodingRoom",
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    role: {
        type: String,
        enum: ["member", "owner"],
        default: "member",
    },
    joinedAt: {
        type: Date,
        default: Date.now,
    },
    leftAt: {
        type: Date,
        default: null,
    }
}, {
    timestamps: true,
})

// Prevent duplicate membership in the same room.
roomMemberSchema.index(
    { roomId: 1, userId: 1 },
    { unique: true }
);

export const RoomMember = mongoose.model("RoomMember", roomMemberSchema)