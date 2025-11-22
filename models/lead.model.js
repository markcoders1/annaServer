const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        message: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;
