
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

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

// Hash password before saving.
userSchema.pre("save", async function () {

    // Skip hashing if the password hasn't changed.
    if (!this.isModified("password")) return;

    // Hash the password.
    this.password = await bcrypt.hash(this.password, 10);
});

// Custom method to verify the password during login.
userSchema.methods.isPasswordCorrect = async function (password) {

    // Compare the entered password with the stored hashed password.
    return await bcrypt.compare(password, this.password);
};


// Generate an Access Token for the authenticated user.
userSchema.methods.generateAccessToken = function () {

    return jwt.sign(
        {
            // Store the user's unique ID inside the token.
            _id: this._id,

            // Include basic user information in the token payload.
            email: this.email,
            userName: this.userName,
            fullName: this.fullName,
        },

        // Secret key used to sign the Access Token.
        process.env.ACCESS_TOKEN_SECRET,

        {
            // Defines how long the Access Token remains valid.
            expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
        }
    );
};


// Generate a Refresh Token for the authenticated user.
userSchema.methods.generateRefreshToken = function () {

    return jwt.sign(
        {
            // User ID helps identify the user during token renewal.
            _id: this._id,
        },

        // Separate secret key for the Refresh Token.
        process.env.REFRESH_TOKEN_SECRET,

        {
            // Defines how long the Refresh Token remains valid.
            expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
        }
    );
};


// Create and export the User model.
export const User = mongoose.model("User", userSchema);
