import mongoose from 'mongoose';

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
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 30,
        },
        roomCode: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 6,
            maxlength: 6,
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